
import React, { useEffect, useState } from "react";
import { getProductReport } from "@/utils/productUtils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/ui/CartDrawer";
import { Button } from "@/components/ui/button";
import { Download, Printer } from "lucide-react";

const ProductReport = () => {
  const [report, setReport] = useState<string>("");

  useEffect(() => {
    // Get the product report
    const productReport = getProductReport();
    setReport(productReport);
  }, []);

  const handleDownload = () => {
    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'product-report.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CartDrawer />
      
      <main className="flex-grow pt-16">
        <div className="container px-4 mx-auto py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-display font-medium">Product Catalog Report</h1>
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleDownload}>
                <Download size={16} className="mr-2" />
                Download
              </Button>
              <Button variant="outline" onClick={handlePrint}>
                <Printer size={16} className="mr-2" />
                Print
              </Button>
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-xl mb-8">
            <pre className="whitespace-pre-wrap font-mono text-sm overflow-x-auto">
              {report}
            </pre>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductReport;
