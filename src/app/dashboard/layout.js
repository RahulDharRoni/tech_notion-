import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const dashboardLayout = {
  title: "Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
