import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-4">Welcome to Vitriol</h1>
          <p className="text-gray-600 mb-4">
            Hello, {session.user?.name || session.user?.email}!
          </p>
          <p className="text-gray-500">
            Dashboard is under development. More features coming soon...
          </p>
        </div>
      </div>
    </div>
  );
}
