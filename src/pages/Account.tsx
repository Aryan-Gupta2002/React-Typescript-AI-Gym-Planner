import { AccountView } from "@neondatabase/neon-js/auth/react";
import { useParams } from "react-router-dom";

export default function Account() {
  const { pathname } = useParams();
  const params = useParams();

  console.log("params:", params);
  console.log("pathname:", params.pathname);
  return (
    <div className="min-h-screen pt-24 pb-12 px-6">
      <div className="max-w-4xl mx-auto">
        <AccountView pathname={pathname} />
      </div>
    </div>
  );
}
