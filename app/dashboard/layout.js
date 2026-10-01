import DashboardSidebar from "@/components/dashboard/DashboardSidebar/DashboardSidebar";
export default function DashboardLayout({ children }) {
  return (
    <>
      <DashboardSidebar />
      {children}
    </>
  );
}
