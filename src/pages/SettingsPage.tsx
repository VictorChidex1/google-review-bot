import { useState, useEffect, useRef } from "react";
import { deleteUser, updateProfile, type User } from "firebase/auth";
import { doc, deleteDoc, updateDoc, getDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from "../firebase";
import {
  User as UserIcon,
  Trash2,
  AlertTriangle,
  Loader2,
  CreditCard,
  Shield,
  Save,
  Camera,
  Mail,
  Smartphone,
  Globe,
  Check,
  BookOpen,
  FileText,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

export default function SettingsPage() {
  const [user, setUser] = useState<User | null>(auth.currentUser);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [timeZone, setTimeZone] = useState("UTC");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setPhoneNumber(data.phoneNumber || "");
            setTimeZone(data.timeZone || "WAT (West Africa Time)");
          }
        } catch (error) {
          console.error("Error fetching user data", error);
        }
      }
    };
    fetchUserData();
  }, [user]);

  const handleSaveProfile = async () => {
    if (!user) return;
    setSaving(true);
    try {
      await updateProfile(user, { displayName });
      await updateDoc(doc(db, "users", user.uid), {
        displayName,
        phoneNumber,
        timeZone,
        updatedAt: new Date(),
      });
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    } finally {
      setSaving(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5MB");
      return;
    }

    setUploading(true);
    try {
      const storageRef = ref(storage, `profile_pictures/${user.uid}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);

      await updateProfile(user, { photoURL: downloadURL });
      await updateDoc(doc(db, "users", user.uid), { photoURL: downloadURL });
      setUser({ ...user, photoURL: downloadURL });
      alert("Avatar updated!");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (!user) return;
    if (
      !window.confirm(
        "⚠️ Danger: You are about to permanently delete your account. This cannot be undone."
      )
    )
      return;
    const confirm2 = window.prompt("To confirm, please type 'DELETE' below:");
    if (confirm2 !== "DELETE") return;
    setIsDeleting(true);
    try {
      await deleteDoc(doc(db, "users", user.uid));
      await deleteUser(user);
    } catch (error: any) {
      console.error("Error deleting account:", error);
      alert("Error: " + error.message);
    } finally {
      setIsDeleting(false);
    }
  };

  if (!user) return <div className="p-10 text-center">Loading settings...</div>;

  const isGoogleUser = user.providerData.some(
    (p) => p.providerId === "google.com"
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
          Account Settings
        </h1>
        <p className="text-slate-500">
          Manage your profile, preferences, and billing.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* LEFT COLUMN: Profile Card */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col items-center text-center">
            <div className="relative group mb-4">
              <div className="w-24 h-24 rounded-full bg-slate-100 p-1 ring-2 ring-white shadow-lg overflow-hidden">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-3xl font-bold">
                    {displayName.charAt(0).toUpperCase() || "U"}
                  </div>
                )}
              </div>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="absolute bottom-0 right-0 bg-white text-slate-700 p-2 rounded-full shadow-md border border-slate-100 hover:text-emerald-600 transition-colors"
                disabled={uploading}
              >
                {uploading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Camera className="w-4 h-4" />
                )}
              </button>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
            <h2 className="text-xl font-bold text-slate-900">
              {displayName || "User"}
            </h2>
            <p className="text-slate-500 text-sm mb-4">{user.email}</p>
            <div className="text-xs font-bold px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full flex items-center gap-1">
              <Shield className="w-3 h-3" /> Pro Plan
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-600" /> Security
            </h3>
            {isGoogleUser ? (
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                <img
                  src="https://www.google.com/favicon.ico"
                  className="w-5 h-5 mt-1"
                  alt="Google"
                />
                <div>
                  <p className="font-bold text-slate-900 text-sm">
                    Google Account
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Securely connected via Google.
                  </p>
                </div>
              </div>
            ) : (
              <button className="w-full py-2 px-4 border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors">
                Change Password
              </button>
            )}
          </div>

          {/* Resources Widget */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-600" /> Resources
            </h3>
            <div className="space-y-3">
              <a
                href="/dashboard/docs"
                className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-lg border border-slate-100 text-slate-500 group-hover:text-emerald-600 transition-colors">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-700 text-sm block group-hover:text-slate-900">
                      Documentation
                    </span>
                    <span className="text-xs text-slate-400">
                      Guides & Tutorials
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500" />
              </a>

              <a
                href="/dashboard/support"
                className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-lg border border-slate-100 text-slate-500 group-hover:text-emerald-600 transition-colors">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-700 text-sm block group-hover:text-slate-900">
                      Support
                    </span>
                    <span className="text-xs text-slate-400">Get Help</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2 pb-4 border-b border-slate-100">
              <UserIcon className="w-5 h-5 text-slate-400" /> General
              Information
            </h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Display Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                    />
                    <UserIcon className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={user.email || ""}
                      disabled
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-slate-500 cursor-not-allowed"
                    />
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                    />
                    <Smartphone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Time Zone
                  </label>
                  <div className="relative">
                    <select
                      value={timeZone}
                      onChange={(e) => setTimeZone(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all appearance-none"
                    >
                      <option>UTC</option>
                      <option>PST</option>
                      <option>EST</option>
                      <option>WAT</option>
                      <option>CET</option>
                    </select>
                    <Globe className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </div>
              <div className="flex justify-end pt-2">
                <button
                  onClick={handleSaveProfile}
                  disabled={saving}
                  className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-6 rounded-xl transition-all shadow-lg shadow-emerald-200 disabled:opacity-50"
                >
                  {saving ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Save className="w-4 h-4" />
                  )}{" "}
                  Save Changes
                </button>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2 pb-4 border-b border-slate-100">
              <CreditCard className="w-5 h-5 text-slate-400" /> Billing & Plans
            </h2>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-xl font-bold text-slate-900">
                  Pro Plan{" "}
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5 rounded-full ml-2">
                    Active
                  </span>
                </p>
                <p className="text-slate-500 text-sm">
                  $29/month • Renews on Dec 15, 2025
                </p>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 font-bold rounded-lg hover:border-slate-300 text-sm">
                  Cancel
                </button>
                <button className="px-4 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 text-sm">
                  Upgrade Plan
                </button>
              </div>
            </div>
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              {[
                { date: "Nov 15, 2025", amount: "$29.00", status: "Paid" },
                { date: "Oct 15, 2025", amount: "$29.00", status: "Paid" },
              ].map((inv, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-50 rounded-full text-emerald-600">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-slate-900 font-bold text-sm">
                        {inv.date}
                      </p>
                      <p className="text-xs text-slate-500">Pro Subscription</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-900 font-bold">{inv.amount}</p>
                    <button className="text-emerald-600 text-xs font-bold hover:underline">
                      Download PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-sm border border-red-100 overflow-hidden">
            <div className="p-6 bg-red-50/50 border-b border-red-100">
              <h2 className="text-lg font-bold text-red-600 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" /> Danger Zone
              </h2>
            </div>
            <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="text-slate-900 font-bold">Delete Account</p>
                <p className="text-slate-500 text-sm">
                  Permanently delete your account and all data.
                </p>
              </div>
              <button
                onClick={handleDeleteAccount}
                disabled={isDeleting}
                className="px-5 py-2.5 bg-white border border-red-200 text-red-600 font-bold rounded-xl hover:bg-red-50 transition-colors flex items-center gap-2"
              >
                {isDeleting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Trash2 className="w-4 h-4" />
                )}{" "}
                Delete Account
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
