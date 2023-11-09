import { category } from "$data";
import { cn } from "$lib/utils";
import { useFilterProduct } from "$store";
import { Button, Checkbox, Label, Slider } from "$ui";

import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
interface FilterCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  className?: string;
}

export const FilterCard: FC<FilterCardProps> = ({ className, ...rest }) => {
  const filterStore = useFilterProduct();
  return (
    <aside {...rest} className={cn("sticky top-2 h-full space-y-10 bg-blue-400/20 px-4 py-4", className)}>
      <div className="product-filter-container">
        <h3 className="product-filter-heading"> Selected Category </h3>

        <div className="flex flex-wrap gap-2">
          {filterStore.selectedCategory.map((val) => {
            return (
              <span key={val} className="inline-block rounded-xl bg-red-500 px-2  py-1">
                {val}
              </span>
            );
          })}
        </div>
      </div>

      <div className="product-filter-container">
        <h3 className="product-filter-heading"> Select by category </h3>
        <div
          className="  space-y-4 
         "
        >
          {category.map((val) => {
            return (
              <Label key={val.name} className="flex gap-x-2">
                <Checkbox
                  checked={filterStore.selectedCategory.includes(val.name)}
                  onClick={() => {
                    filterStore.setSelectedCategory(val.name);
                  }}
                />
                <p>{val.name}</p>
              </Label>
            );
          })}
        </div>
      </div>

      <div className="product-filter-container">
        <h3 className="product-filter-heading">
          Price Range - <span>{filterStore.priceRange}</span>
        </h3>
        <div className="flex justify-between">
          <p className="text-base font-semibold">1K</p>
          <p className="text-base font-semibold">10K</p>
        </div>
        <Slider
          min={0}
          max={10000}
          value={[filterStore.priceRange]}
          onValueChange={(value) => {
            filterStore.setPriceRange(value[0]);
          }}
        />
      </div>

      <div className="flex w-full justify-end">
        <Button
          variant={"dark"}
          className=" "
          onClick={() => {
            filterStore.setResetFilter();
          }}
        >
          Rest Filters
        </Button>
      </div>
    </aside>
  );
};
