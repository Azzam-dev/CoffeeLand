import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    debug: true,
    supportedLngs: ["en", "ar"],
    fallbackLng: "en",
    detection: {
      // order and from where user language should be detected
      order: [
        "path",
        "querystring",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag",
        "subdomain",
      ],

      // cache user language on
      caches: ["cookie", "localStorage"],
    },
    resources: {
      en: {
        translation: {
          // here we will place our translations...
          search_placeholder: "Search for your favourite coffee",
          home: "Home",
          orders: "Orders",
          charts: "Charts",
          new_order: "New Order",

          not_found: "NO coffee found",

          order_for_table: "Order For Table:",
          cancel_order: "Cancel Order",

          charts_description:
            "Statistics of ingredients used to prepare your favorite coffee cups",

          table_number: "Table Number",
          table_number_description: "You can find the number on your table",
          add_item: "add item",
          remove: "remove",
          save_order: "Save Order",
        },
      },
      ar: {
        translation: {
          // here we will place our translations...
          search_placeholder: "ابحث عن قهوتك المفضلة",
          home: "الرئيسية",
          orders: "الطلبات",
          charts: "الاحصائيات",
          new_order: "طلب جديد",

          not_found: "لم يتم العثور على اي قهوة",

          order_for_table: "طلب الطاوله رقم :",
          cancel_order: "إلغاء الطلب",

          charts_description:
            "إحصائيات المكونات المستخدمة في تحضير فناجين القهوة المفضلة لديك",

          table_number: "رقم الطاولة",
          table_number_description: "يمكنك العثور على الرقم على طاولتك",
          add_item: "اضافة عنصر",
          remove: "إزالة",
          save_order: "احفظ الطلب",
        },
      },
    },
  });

export default i18n;
