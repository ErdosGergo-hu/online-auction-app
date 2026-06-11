import { useTranslation } from "react-i18next";
import DashboardAuctionList from "../components/dashboard/DashboardAuctionList";
import DashboardUserList from "../components/dashboard/DashboardUserList";
import PageTitle from "../components/PageTitle";

export default function DashboardPage() {
  const { t } = useTranslation();

  return (
    <div className="px-10 flex flex-col gap-y-10">
      <PageTitle
        title={t("header.dashboard")}
        message={t("dashboard.message")}
      />
      <DashboardAuctionList />
      <DashboardUserList />
    </div>
  );
}
