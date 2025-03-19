
import React from "react";
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Search, Printer, Box, Zap } from "lucide-react";
import { useSearch } from "@/hooks/useSearch";
import { SearchItem } from "@/data/searchData";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchDialog: React.FC<SearchDialogProps> = ({ open, onOpenChange }) => {
  const { 
    searchQuery, 
    setSearchQuery, 
    groupedItems, 
    handleSelect 
  } = useSearch(open, onOpenChange);
  
  const { category: categoryItems, ink: inkItems, toner: tonerItems } = groupedItems;
  
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
