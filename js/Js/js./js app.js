/* =====================================================
   KSMC PRINTING MANAGEMENT SYSTEM
   Main JavaScript File
===================================================== */

const KSMC = {

    company: "Klassic Saloman Media Concepts",

    phone1: "09131849465",

    phone2: "09073520101",

    phone3: "07019033808",

    email: "ayindegbengadamilare@gmail.com",

    profitMargin: 20,

    vatRate: 7.5

};

/* ===========================
   Navigation
=========================== */

function openMenu() {

    document.body.classList.toggle("menu-open");

}

/* ===========================
   Quote Calculator
=========================== */

function calculateQuote() {

    const quantity =
        Number(document.getElementById("quantity")?.value) || 0;

    const unitPrice =
        Number(document.getElementById("unitPrice")?.value) || 0;

    const delivery =
        Number(document.getElementById("delivery")?.value) || 0;

    const discount =
        Number(document.getElementById("discount")?.value) || 0;

    const productionCost =
        quantity * unitPrice;

    const profit =
        productionCost * (KSMC.profitMargin / 100);

    const subtotal =
        productionCost + profit;

    const vat =
        subtotal * (KSMC.vatRate / 100);

    const total =
        subtotal + vat + delivery - discount;

    document.getElementById("productionCost").textContent =
        "₦" + productionCost.toLocaleString();

    document.getElementById("profit").textContent =
        "₦" + profit.toLocaleString();

    document.getElementById("vat").textContent =
        "₦" + vat.toLocaleString();

    document.getElementById("grandTotal").textContent =
        "₦" + total.toLocaleString();

}

/* ===========================
   WhatsApp
=========================== */

function sendWhatsApp() {

    const total =
        document.getElementById("grandTotal")?.textContent || "₦0";

    const message =
`Hello KSMC,

I would like to proceed with my printing quotation.

Quotation Total: ${total}`;

    window.open(
        "https://wa.me/2349131849465?text=" +
        encodeURIComponent(message),
        "_blank"
    );

}

/* ===========================
   Print
=========================== */

function printQuotation() {

    window.print();

}

/* ===========================
   Current Year
=========================== */

document.addEventListener("DOMContentLoaded", () => {

    const year =
        document.getElementById("year");

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }

});
