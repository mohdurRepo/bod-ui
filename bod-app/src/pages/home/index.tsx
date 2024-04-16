import i18next from "i18next";
export const Home = () => {
  return (
    <div>
      <h2>{i18next.t("user_dashboard")}</h2>
    </div>
  );
};
