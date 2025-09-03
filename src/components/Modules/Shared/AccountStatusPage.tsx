import { Ban } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";


export default function AccountStatusPage({
  status = "blocked",
  supportEmail,
  supportPhone,
}: {
  status?: "blocked" | "suspended";
  supportEmail?: string;
  supportPhone?: string;
}) {
  const isBlocked = status === "blocked";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <Ban className="w-12 h-12 mx-auto text-red-500 mb-2" />
          <CardTitle className="text-xl font-bold">
            {isBlocked ? "Your Account is Blocked" : "Your Account is Suspended"}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <p className="text-gray-600">
            You cannot access the dashboard because your account is currently {status}.
          </p>
          <p className="text-gray-600">
            Please contact our support team to resolve this issue.
          </p>
          {supportEmail && <p>Email: <span className="font-medium">{supportEmail}</span></p>}
          {supportPhone && <p>Phone: <span className="font-medium">{supportPhone}</span></p>}
          <Link to={'/contact'}>
            <Button className="w-full mt-4 cursor-pointer">Contact Support</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
