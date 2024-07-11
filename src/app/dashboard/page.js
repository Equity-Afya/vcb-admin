"use client"; // This directive is necessary for client components

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Do nothing while loading
    if (!session) router.push("/login"); // Redirect to login if no session
  }, [session, status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {console.log(session)}
      {session ? (
        <div>
          <h1>
            Welcome, {session.user.entity.firstName}{" "}
            {session.user.entity.lastName}
          </h1>
          <p>Role: {session.user.entity.primaryRole}</p>
        </div>
      ) : (
        <div>You need to be authenticated to view this page.</div>
      )}
    </div>
  );
};

export default Dashboard;
