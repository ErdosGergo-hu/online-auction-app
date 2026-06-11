import { useTranslation } from "react-i18next";
import DialogModal from "../DialogModal";
import InputWithLabel from "../InputWithLabel";
import { useState } from "react";
import PageTitle from "../PageTitle";
import SelectWithLabel from "../SelectWithLabel";
import { categories, createAuction } from "../../api/auctionApi";

import { useNavigate } from "react-router-dom";
import DatePickerWithLabel from "../DatePickerWithLabel";

export default function AuctionCreatePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    startingPriceHuf: "",
    quantity: "",
    imageUrl: "",
  });
  const [category, setCategory] = useState("");
  const [endDateTime, setEndDateTime] = useState<Date | null>(new Date());
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const inputFields = [
    { key: "name" as const, label: t("auction.name"), type: "text" },
    {
      key: "description" as const,
      label: t("auction.description"),
      type: "text",
    },
    {
      key: "startingPriceHuf" as const,
      label: t("auction.startingPriceHuf"),
      type: "number",
    },
    { key: "quantity" as const, label: t("auction.quantity"), type: "number" },
    { key: "imageUrl" as const, label: t("auction.imageUrl"), type: "text" },
  ];

  async function handleCreateAuction(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    createAuction({
      name: formData.name,
      description: formData.description,
      imageUrl: formData.imageUrl,
      quantity: parseInt(formData.quantity),
      category,
      startDateTime: new Date(),
      endDateTime: endDateTime!,
      startingPriceHuf: parseFloat(formData.startingPriceHuf),
    })
      .then(() => {
        navigate("/auctions");
      })
      .catch((err) => {
        console.log("Error: ", err.response?.data);
        setErrorMessage(
          err.response?.data.message || t("auction.error.create"),
        );
        setError(true);
      });
  }

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 lg:px-8">
        <PageTitle
          title={t("auction.create")}
          message={t("auction.createDetails")}
        />

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleCreateAuction} className="space-y-6">
            {inputFields.map((field) => (
              <InputWithLabel
                key={field.key}
                label={field.label}
                type={field.type}
                inputValue={formData[field.key]}
                onInputChange={(value) =>
                  setFormData({ ...formData, [field.key]: value })
                }
              />
            ))}

            <SelectWithLabel
              label={t("auction.category.title")}
              value={category}
              onChange={setCategory}
              options={categories}
            />

            <DatePickerWithLabel
              label={t("auction.endDateTime")}
              selectedDate={endDateTime}
              onDateChange={setEndDateTime}
            />

            <div className="flex flex-col gap-4">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gold hover:bg-gold-hover px-3 py-1.5 text-md font-semibold text-background focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                {t("auction.create")}
              </button>
              <button
                type="button"
                onClick={() => navigate("/auctions")}
                className="flex w-full justify-center rounded-md bg-gold hover:bg-gold-hover px-3 py-1.5 text-md font-semibold text-background focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                {t("cancel")}
              </button>
            </div>
          </form>
        </div>
      </div>
      <DialogModal
        open={error}
        message={errorMessage}
        onClose={() => {
          setError(false);
          setErrorMessage("");
        }}
      />
      ;
    </>
  );
}
