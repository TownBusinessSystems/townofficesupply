
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Search, Printer, Box, Zap } from "lucide-react";

// Sample data for the search functionality
// In a real app, this would come from your API or context
const sampleSearchItems = [
  { id: "p1", name: "HP 67 Black Ink Cartridge", category: "ink", url: "/product/p1" },
  { id: "p2", name: "Canon PG-245 Black Ink Cartridge", category: "ink", url: "/product/p2" },
  { id: "p3", name: "Epson 302 Claria Premium Ink", category: "ink", url: "/product/p3" },
  { id: "p4", name: "Brother TN760 High Yield Toner", category: "toner", url: "/product/p4" },
  { id: "p5", name: "HP 55A Black Toner Cartridge", category: "toner", url: "/product/p5" },
  { id: "cat1", name: "All Ink Cartridges", category: "category", url: "/products?category=ink" },
  { id: "cat2", name: "All Toner Cartridges", category: "category", url: "/products?category=toner" },
  { id: "cat3", name: "All Products", category: "category", url: "/products" },
];

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchDialog: React.FC<SearchDialogProps> = ({ open, onOpenChange }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  
  // Reset search when dialog opens
  useEffect(() => {
    if (open) {
      setSearchQuery("");
    }
  }, [open]);

  const filteredItems = sampleSearchItems.filter((item) => {
    if (!searchQuery) return true;
    return item.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleSelect = (item: typeof sampleSearchItems[0]) => {
    onOpenChange(false);
    navigate(item.url);
  };

  // Group items by category
  const inkItems = filteredItems.filter((item) => item.category === "ink");
  const tonerItems = filteredItems.filter((item) => item.category === "toner");
  const categoryItems = filteredItems.filter((item) => item.category === "category");
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-0">
        <Command className="rounded-lg border shadow-md">
          <CommandInput 
            placeholder="Search for products..." 
            value={searchQuery}
            onValueChange={setSearchQuery}
            className="h-12"
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {categoryItems.length > 0 && (
              <CommandGroup heading="Categories">
                {categoryItems.map((item) => (
                  <CommandItem 
                    key={item.id} 
                    onSelect={() => handleSelect(item)}
                    className="flex items-center gap-2 p-2 cursor-pointer"
                  >
                    <Box className="h-4 w-4 text-muted-foreground" />
                    <span>{item.name}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
            {inkItems.length > 0 && (
              <CommandGroup heading="Ink Cartridges">
                {inkItems.map((item) => (
                  <CommandItem 
                    key={item.id} 
                    onSelect={() => handleSelect(item)}
                    className="flex items-center gap-2 p-2 cursor-pointer"
                  >
                    <Zap className="h-4 w-4 text-blue-500" />
                    <span>{item.name}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
            {tonerItems.length > 0 && (
              <CommandGroup heading="Toner Cartridges">
                {tonerItems.map((item) => (
                  <CommandItem 
                    key={item.id} 
                    onSelect={() => handleSelect(item)}
                    className="flex items-center gap-2 p-2 cursor-pointer"
                  >
                    <Printer className="h-4 w-4 text-purple-500" />
                    <span>{item.name}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
