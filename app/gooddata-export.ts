/* eslint-disable */
/* THIS FILE WAS AUTO-GENERATED USING CATALOG EXPORTER; YOU SHOULD NOT EDIT THIS FILE; GENERATE TIME: 2023-08-01T12:17:39.735Z; */
// @ts-ignore ignore unused imports here if they happen (e.g. when there is no measure in the workspace)
import { newAttribute, newMeasure, IAttribute, IMeasure, IMeasureDefinition, idRef } from "@gooddata/sdk-model";

/**
 * Attribute Title: Customer city
 * Attribute ID: customer_city
 */
export const CustomerCity = {
  /**
   * Display Form Title: City pushpin latitude
   * Display Form ID: geo__customer_city__city_pushpin_latitude
   */
  CityPushpinLatitude: newAttribute("geo__customer_city__city_pushpin_latitude")
  /**
   * Display Form Title: Customer city
   * Display Form ID: customer_city
   */,
  Default: newAttribute("customer_city")
  /**
   * Display Form Title: City pushpin longitude
   * Display Form ID: geo__customer_city__city_pushpin_longitude
   */,
  CityPushpinLongitude: newAttribute("geo__customer_city__city_pushpin_longitude"),
};
/**
 * Attribute Title: Customer country
 * Attribute ID: customer_country
 */
export const CustomerCountry: IAttribute = newAttribute("customer_country");
/**
 * Attribute Title: Customer email
 * Attribute ID: customer_email
 */
export const CustomerEmail: IAttribute = newAttribute("customer_email");
/**
 * Attribute Title: Customer id
 * Attribute ID: customer_id
 */
export const CustomerId = {
  /**
   * Display Form Title: Customer id
   * Display Form ID: customer_id
   */
  Default: newAttribute("customer_id")
  /**
   * Display Form Title: Customer name
   * Display Form ID: customer_name
   */,
  CustomerName: newAttribute("customer_name"),
};
/**
 * Attribute Title: Customer state
 * Attribute ID: customer_state
 */
export const CustomerState: IAttribute = newAttribute("customer_state");
/**
 * Attribute Title: Monthly inventory id
 * Attribute ID: monthly_inventory_id
 */
export const MonthlyInventoryId: IAttribute = newAttribute("monthly_inventory_id");
/**
 * Attribute Title: Customer age
 * Attribute ID: customer_age
 */
export const CustomerAge: IAttribute = newAttribute("customer_age");
/**
 * Attribute Title: Order line id
 * Attribute ID: order_line_id
 */
export const OrderLineId: IAttribute = newAttribute("order_line_id");
/**
 * Attribute Title: Order id
 * Attribute ID: order_id
 */
export const OrderId: IAttribute = newAttribute("order_id");
/**
 * Attribute Title: Order status
 * Attribute ID: order_status
 */
export const OrderStatus: IAttribute = newAttribute("order_status");
/**
 * Attribute Title: Product brand
 * Attribute ID: product_brand
 */
export const ProductBrand: IAttribute = newAttribute("product_brand");
/**
 * Attribute Title: Product category
 * Attribute ID: product_category
 */
export const ProductCategory: IAttribute = newAttribute("product_category");
/**
 * Attribute Title: Product id
 * Attribute ID: product_id
 */
export const ProductId = {
  /**
   * Display Form Title: Product name
   * Display Form ID: product_name
   */
  ProductName: newAttribute("product_name")
  /**
   * Display Form Title: Product id
   * Display Form ID: product_id
   */,
  Default: newAttribute("product_id")
  /**
   * Display Form Title: Product id image web
   * Display Form ID: product_id_image_web
   */,
  ImageWeb: newAttribute("product_id_image_web"),
};
/**
 * Attribute Title: Product image
 * Attribute ID: product_image
 */
export const ProductImage = {
  /**
   * Display Form Title: Product image
   * Display Form ID: product_image
   */
  Default: newAttribute("product_image")
  /**
   * Display Form Title: Product image web
   * Display Form ID: product_image_web
   */,
  Web: newAttribute("product_image_web"),
};
/**
 * Attribute Title: Product rating
 * Attribute ID: product_rating
 */
export const ProductRating: IAttribute = newAttribute("product_rating");
/**
 * Attribute Title: Return id
 * Attribute ID: return_id
 */
export const ReturnId: IAttribute = newAttribute("return_id");
/**
 * Fact Title: Monthly quantity bom
 * Fact ID: monthly_quantity_bom
 */
export const MonthlyQuantityBom = {
  /**
   * Fact Title: Monthly quantity bom
   * Fact ID: monthly_quantity_bom
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("monthly_quantity_bom", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Monthly quantity bom
   * Fact ID: monthly_quantity_bom
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("monthly_quantity_bom", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Monthly quantity bom
   * Fact ID: monthly_quantity_bom
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("monthly_quantity_bom", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Monthly quantity bom
   * Fact ID: monthly_quantity_bom
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("monthly_quantity_bom", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Monthly quantity bom
   * Fact ID: monthly_quantity_bom
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("monthly_quantity_bom", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Monthly quantity bom
   * Fact ID: monthly_quantity_bom
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("monthly_quantity_bom", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Monthly quantity eom
 * Fact ID: monthly_quantity_eom
 */
export const MonthlyQuantityEom = {
  /**
   * Fact Title: Monthly quantity eom
   * Fact ID: monthly_quantity_eom
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("monthly_quantity_eom", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Monthly quantity eom
   * Fact ID: monthly_quantity_eom
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("monthly_quantity_eom", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Monthly quantity eom
   * Fact ID: monthly_quantity_eom
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("monthly_quantity_eom", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Monthly quantity eom
   * Fact ID: monthly_quantity_eom
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("monthly_quantity_eom", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Monthly quantity eom
   * Fact ID: monthly_quantity_eom
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("monthly_quantity_eom", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Monthly quantity eom
   * Fact ID: monthly_quantity_eom
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("monthly_quantity_eom", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Order unit cost
 * Fact ID: order_unit_cost
 */
export const OrderUnitCost = {
  /**
   * Fact Title: Order unit cost
   * Fact ID: order_unit_cost
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("order_unit_cost", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Order unit cost
   * Fact ID: order_unit_cost
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("order_unit_cost", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Order unit cost
   * Fact ID: order_unit_cost
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("order_unit_cost", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Order unit cost
   * Fact ID: order_unit_cost
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("order_unit_cost", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Order unit cost
   * Fact ID: order_unit_cost
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("order_unit_cost", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Order unit cost
   * Fact ID: order_unit_cost
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("order_unit_cost", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Order unit discount
 * Fact ID: order_unit_discount
 */
export const OrderUnitDiscount = {
  /**
   * Fact Title: Order unit discount
   * Fact ID: order_unit_discount
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("order_unit_discount", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Order unit discount
   * Fact ID: order_unit_discount
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("order_unit_discount", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Order unit discount
   * Fact ID: order_unit_discount
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("order_unit_discount", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Order unit discount
   * Fact ID: order_unit_discount
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("order_unit_discount", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Order unit discount
   * Fact ID: order_unit_discount
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("order_unit_discount", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Order unit discount
   * Fact ID: order_unit_discount
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("order_unit_discount", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Order unit price
 * Fact ID: order_unit_price
 */
export const OrderUnitPrice = {
  /**
   * Fact Title: Order unit price
   * Fact ID: order_unit_price
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("order_unit_price", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Order unit price
   * Fact ID: order_unit_price
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("order_unit_price", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Order unit price
   * Fact ID: order_unit_price
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("order_unit_price", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Order unit price
   * Fact ID: order_unit_price
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("order_unit_price", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Order unit price
   * Fact ID: order_unit_price
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("order_unit_price", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Order unit price
   * Fact ID: order_unit_price
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("order_unit_price", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Order unit quantity
 * Fact ID: order_unit_quantity
 */
export const OrderUnitQuantity = {
  /**
   * Fact Title: Order unit quantity
   * Fact ID: order_unit_quantity
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("order_unit_quantity", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Order unit quantity
   * Fact ID: order_unit_quantity
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("order_unit_quantity", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Order unit quantity
   * Fact ID: order_unit_quantity
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("order_unit_quantity", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Order unit quantity
   * Fact ID: order_unit_quantity
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("order_unit_quantity", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Order unit quantity
   * Fact ID: order_unit_quantity
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("order_unit_quantity", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Order unit quantity
   * Fact ID: order_unit_quantity
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("order_unit_quantity", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Rating
 * Fact ID: rating
 */
export const Rating = {
  /**
   * Fact Title: Rating
   * Fact ID: rating
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("rating", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Rating
   * Fact ID: rating
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("rating", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Rating
   * Fact ID: rating
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("rating", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Rating
   * Fact ID: rating
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("rating", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Rating
   * Fact ID: rating
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("rating", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Rating
   * Fact ID: rating
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("rating", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Return unit cost
 * Fact ID: return_unit_cost
 */
export const ReturnUnitCost = {
  /**
   * Fact Title: Return unit cost
   * Fact ID: return_unit_cost
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("return_unit_cost", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Return unit cost
   * Fact ID: return_unit_cost
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("return_unit_cost", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Return unit cost
   * Fact ID: return_unit_cost
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("return_unit_cost", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Return unit cost
   * Fact ID: return_unit_cost
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("return_unit_cost", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Return unit cost
   * Fact ID: return_unit_cost
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("return_unit_cost", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Return unit cost
   * Fact ID: return_unit_cost
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("return_unit_cost", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Return unit paid amount
 * Fact ID: return_unit_paid_amount
 */
export const ReturnUnitPaidAmount = {
  /**
   * Fact Title: Return unit paid amount
   * Fact ID: return_unit_paid_amount
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("return_unit_paid_amount", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Return unit paid amount
   * Fact ID: return_unit_paid_amount
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("return_unit_paid_amount", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Return unit paid amount
   * Fact ID: return_unit_paid_amount
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("return_unit_paid_amount", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Return unit paid amount
   * Fact ID: return_unit_paid_amount
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("return_unit_paid_amount", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Return unit paid amount
   * Fact ID: return_unit_paid_amount
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("return_unit_paid_amount", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Return unit paid amount
   * Fact ID: return_unit_paid_amount
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("return_unit_paid_amount", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Return unit quantity
 * Fact ID: return_unit_quantity
 */
export const ReturnUnitQuantity = {
  /**
   * Fact Title: Return unit quantity
   * Fact ID: return_unit_quantity
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("return_unit_quantity", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Return unit quantity
   * Fact ID: return_unit_quantity
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("return_unit_quantity", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Return unit quantity
   * Fact ID: return_unit_quantity
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("return_unit_quantity", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Return unit quantity
   * Fact ID: return_unit_quantity
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("return_unit_quantity", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Return unit quantity
   * Fact ID: return_unit_quantity
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("return_unit_quantity", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Return unit quantity
   * Fact ID: return_unit_quantity
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("return_unit_quantity", "fact"), (m) => m.aggregation("runsum")),
};
/** Available Date Data Sets */
export const DateDatasets = {
  /**
   * Date Data Set Title: Customer created date
   * Date Data Set ID: customer_created_date
   */
  CustomerCreatedDate: {
    ref: idRef("customer_created_date", "dataSet"),
    identifier: "customer_created_date"
    /**
     * Date Attribute: Customer created date - Minute
     * Date Attribute ID: customer_created_date.minute
     */,
    CustomerCreatedDateMinute: {
      ref: idRef("customer_created_date.minute", "attribute"),
      identifier: "customer_created_date.minute"
      /**
       * Display Form Title: Customer created date - Minute
       * Display Form ID: customer_created_date.minute
       */,
      Default: newAttribute("customer_created_date.minute"),
    }
    /**
     * Date Attribute: Customer created date - Hour
     * Date Attribute ID: customer_created_date.hour
     */,
    CustomerCreatedDateHour: {
      ref: idRef("customer_created_date.hour", "attribute"),
      identifier: "customer_created_date.hour"
      /**
       * Display Form Title: Customer created date - Hour
       * Display Form ID: customer_created_date.hour
       */,
      Default: newAttribute("customer_created_date.hour"),
    }
    /**
     * Date Attribute: Customer created date - Date
     * Date Attribute ID: customer_created_date.day
     */,
    CustomerCreatedDateDate: {
      ref: idRef("customer_created_date.day", "attribute"),
      identifier: "customer_created_date.day"
      /**
       * Display Form Title: Customer created date - Date
       * Display Form ID: customer_created_date.day
       */,
      Default: newAttribute("customer_created_date.day"),
    }
    /**
     * Date Attribute: Customer created date - Week/Year
     * Date Attribute ID: customer_created_date.week
     */,
    CustomerCreatedDateWeekYear: {
      ref: idRef("customer_created_date.week", "attribute"),
      identifier: "customer_created_date.week"
      /**
       * Display Form Title: Customer created date - Week/Year
       * Display Form ID: customer_created_date.week
       */,
      Default: newAttribute("customer_created_date.week"),
    }
    /**
     * Date Attribute: Customer created date - Month/Year
     * Date Attribute ID: customer_created_date.month
     */,
    CustomerCreatedDateMonthYear: {
      ref: idRef("customer_created_date.month", "attribute"),
      identifier: "customer_created_date.month"
      /**
       * Display Form Title: Customer created date - Month/Year
       * Display Form ID: customer_created_date.month
       */,
      Default: newAttribute("customer_created_date.month"),
    }
    /**
     * Date Attribute: Customer created date - Quarter/Year
     * Date Attribute ID: customer_created_date.quarter
     */,
    CustomerCreatedDateQuarterYear: {
      ref: idRef("customer_created_date.quarter", "attribute"),
      identifier: "customer_created_date.quarter"
      /**
       * Display Form Title: Customer created date - Quarter/Year
       * Display Form ID: customer_created_date.quarter
       */,
      Default: newAttribute("customer_created_date.quarter"),
    }
    /**
     * Date Attribute: Customer created date - Year
     * Date Attribute ID: customer_created_date.year
     */,
    CustomerCreatedDateYear: {
      ref: idRef("customer_created_date.year", "attribute"),
      identifier: "customer_created_date.year"
      /**
       * Display Form Title: Customer created date - Year
       * Display Form ID: customer_created_date.year
       */,
      Default: newAttribute("customer_created_date.year"),
    }
    /**
     * Date Attribute: Customer created date - Minute of Hour
     * Date Attribute ID: customer_created_date.minuteOfHour
     */,
    CustomerCreatedDateMinuteOfHour: {
      ref: idRef("customer_created_date.minuteOfHour", "attribute"),
      identifier: "customer_created_date.minuteOfHour"
      /**
       * Display Form Title: Customer created date - Minute of Hour
       * Display Form ID: customer_created_date.minuteOfHour
       */,
      Default: newAttribute("customer_created_date.minuteOfHour"),
    }
    /**
     * Date Attribute: Customer created date - Hour of Day
     * Date Attribute ID: customer_created_date.hourOfDay
     */,
    CustomerCreatedDateHourOfDay: {
      ref: idRef("customer_created_date.hourOfDay", "attribute"),
      identifier: "customer_created_date.hourOfDay"
      /**
       * Display Form Title: Customer created date - Hour of Day
       * Display Form ID: customer_created_date.hourOfDay
       */,
      Default: newAttribute("customer_created_date.hourOfDay"),
    }
    /**
     * Date Attribute: Customer created date - Day of Week
     * Date Attribute ID: customer_created_date.dayOfWeek
     */,
    CustomerCreatedDateDayOfWeek: {
      ref: idRef("customer_created_date.dayOfWeek", "attribute"),
      identifier: "customer_created_date.dayOfWeek"
      /**
       * Display Form Title: Customer created date - Day of Week
       * Display Form ID: customer_created_date.dayOfWeek
       */,
      Default: newAttribute("customer_created_date.dayOfWeek"),
    }
    /**
     * Date Attribute: Customer created date - Day of Month
     * Date Attribute ID: customer_created_date.dayOfMonth
     */,
    CustomerCreatedDateDayOfMonth: {
      ref: idRef("customer_created_date.dayOfMonth", "attribute"),
      identifier: "customer_created_date.dayOfMonth"
      /**
       * Display Form Title: Customer created date - Day of Month
       * Display Form ID: customer_created_date.dayOfMonth
       */,
      Default: newAttribute("customer_created_date.dayOfMonth"),
    }
    /**
     * Date Attribute: Customer created date - Day of Year
     * Date Attribute ID: customer_created_date.dayOfYear
     */,
    CustomerCreatedDateDayOfYear: {
      ref: idRef("customer_created_date.dayOfYear", "attribute"),
      identifier: "customer_created_date.dayOfYear"
      /**
       * Display Form Title: Customer created date - Day of Year
       * Display Form ID: customer_created_date.dayOfYear
       */,
      Default: newAttribute("customer_created_date.dayOfYear"),
    }
    /**
     * Date Attribute: Customer created date - Week of Year
     * Date Attribute ID: customer_created_date.weekOfYear
     */,
    CustomerCreatedDateWeekOfYear: {
      ref: idRef("customer_created_date.weekOfYear", "attribute"),
      identifier: "customer_created_date.weekOfYear"
      /**
       * Display Form Title: Customer created date - Week of Year
       * Display Form ID: customer_created_date.weekOfYear
       */,
      Default: newAttribute("customer_created_date.weekOfYear"),
    }
    /**
     * Date Attribute: Customer created date - Month of Year
     * Date Attribute ID: customer_created_date.monthOfYear
     */,
    CustomerCreatedDateMonthOfYear: {
      ref: idRef("customer_created_date.monthOfYear", "attribute"),
      identifier: "customer_created_date.monthOfYear"
      /**
       * Display Form Title: Customer created date - Month of Year
       * Display Form ID: customer_created_date.monthOfYear
       */,
      Default: newAttribute("customer_created_date.monthOfYear"),
    }
    /**
     * Date Attribute: Customer created date - Quarter of Year
     * Date Attribute ID: customer_created_date.quarterOfYear
     */,
    CustomerCreatedDateQuarterOfYear: {
      ref: idRef("customer_created_date.quarterOfYear", "attribute"),
      identifier: "customer_created_date.quarterOfYear"
      /**
       * Display Form Title: Customer created date - Quarter of Year
       * Display Form ID: customer_created_date.quarterOfYear
       */,
      Default: newAttribute("customer_created_date.quarterOfYear"),
    },
  }
  /**
   * Date Data Set Title: Date
   * Date Data Set ID: date
   */,
  Date: {
    ref: idRef("date", "dataSet"),
    identifier: "date"
    /**
     * Date Attribute: Date - Minute
     * Date Attribute ID: date.minute
     */,
    DateMinute: {
      ref: idRef("date.minute", "attribute"),
      identifier: "date.minute"
      /**
       * Display Form Title: Date - Minute
       * Display Form ID: date.minute
       */,
      Default: newAttribute("date.minute"),
    }
    /**
     * Date Attribute: Date - Hour
     * Date Attribute ID: date.hour
     */,
    DateHour: {
      ref: idRef("date.hour", "attribute"),
      identifier: "date.hour"
      /**
       * Display Form Title: Date - Hour
       * Display Form ID: date.hour
       */,
      Default: newAttribute("date.hour"),
    }
    /**
     * Date Attribute: Date - Date
     * Date Attribute ID: date.day
     */,
    DateDate: {
      ref: idRef("date.day", "attribute"),
      identifier: "date.day"
      /**
       * Display Form Title: Date - Date
       * Display Form ID: date.day
       */,
      Default: newAttribute("date.day"),
    }
    /**
     * Date Attribute: Date - Week/Year
     * Date Attribute ID: date.week
     */,
    DateWeekYear: {
      ref: idRef("date.week", "attribute"),
      identifier: "date.week"
      /**
       * Display Form Title: Date - Week/Year
       * Display Form ID: date.week
       */,
      Default: newAttribute("date.week"),
    }
    /**
     * Date Attribute: Date - Month/Year
     * Date Attribute ID: date.month
     */,
    DateMonthYear: {
      ref: idRef("date.month", "attribute"),
      identifier: "date.month"
      /**
       * Display Form Title: Date - Month/Year
       * Display Form ID: date.month
       */,
      Default: newAttribute("date.month"),
    }
    /**
     * Date Attribute: Date - Quarter/Year
     * Date Attribute ID: date.quarter
     */,
    DateQuarterYear: {
      ref: idRef("date.quarter", "attribute"),
      identifier: "date.quarter"
      /**
       * Display Form Title: Date - Quarter/Year
       * Display Form ID: date.quarter
       */,
      Default: newAttribute("date.quarter"),
    }
    /**
     * Date Attribute: Date - Year
     * Date Attribute ID: date.year
     */,
    DateYear: {
      ref: idRef("date.year", "attribute"),
      identifier: "date.year"
      /**
       * Display Form Title: Date - Year
       * Display Form ID: date.year
       */,
      Default: newAttribute("date.year"),
    }
    /**
     * Date Attribute: Date - Minute of Hour
     * Date Attribute ID: date.minuteOfHour
     */,
    DateMinuteOfHour: {
      ref: idRef("date.minuteOfHour", "attribute"),
      identifier: "date.minuteOfHour"
      /**
       * Display Form Title: Date - Minute of Hour
       * Display Form ID: date.minuteOfHour
       */,
      Default: newAttribute("date.minuteOfHour"),
    }
    /**
     * Date Attribute: Date - Hour of Day
     * Date Attribute ID: date.hourOfDay
     */,
    DateHourOfDay: {
      ref: idRef("date.hourOfDay", "attribute"),
      identifier: "date.hourOfDay"
      /**
       * Display Form Title: Date - Hour of Day
       * Display Form ID: date.hourOfDay
       */,
      Default: newAttribute("date.hourOfDay"),
    }
    /**
     * Date Attribute: Date - Day of Week
     * Date Attribute ID: date.dayOfWeek
     */,
    DateDayOfWeek: {
      ref: idRef("date.dayOfWeek", "attribute"),
      identifier: "date.dayOfWeek"
      /**
       * Display Form Title: Date - Day of Week
       * Display Form ID: date.dayOfWeek
       */,
      Default: newAttribute("date.dayOfWeek"),
    }
    /**
     * Date Attribute: Date - Day of Month
     * Date Attribute ID: date.dayOfMonth
     */,
    DateDayOfMonth: {
      ref: idRef("date.dayOfMonth", "attribute"),
      identifier: "date.dayOfMonth"
      /**
       * Display Form Title: Date - Day of Month
       * Display Form ID: date.dayOfMonth
       */,
      Default: newAttribute("date.dayOfMonth"),
    }
    /**
     * Date Attribute: Date - Day of Year
     * Date Attribute ID: date.dayOfYear
     */,
    DateDayOfYear: {
      ref: idRef("date.dayOfYear", "attribute"),
      identifier: "date.dayOfYear"
      /**
       * Display Form Title: Date - Day of Year
       * Display Form ID: date.dayOfYear
       */,
      Default: newAttribute("date.dayOfYear"),
    }
    /**
     * Date Attribute: Date - Week of Year
     * Date Attribute ID: date.weekOfYear
     */,
    DateWeekOfYear: {
      ref: idRef("date.weekOfYear", "attribute"),
      identifier: "date.weekOfYear"
      /**
       * Display Form Title: Date - Week of Year
       * Display Form ID: date.weekOfYear
       */,
      Default: newAttribute("date.weekOfYear"),
    }
    /**
     * Date Attribute: Date - Month of Year
     * Date Attribute ID: date.monthOfYear
     */,
    DateMonthOfYear: {
      ref: idRef("date.monthOfYear", "attribute"),
      identifier: "date.monthOfYear"
      /**
       * Display Form Title: Date - Month of Year
       * Display Form ID: date.monthOfYear
       */,
      Default: newAttribute("date.monthOfYear"),
    }
    /**
     * Date Attribute: Date - Quarter of Year
     * Date Attribute ID: date.quarterOfYear
     */,
    DateQuarterOfYear: {
      ref: idRef("date.quarterOfYear", "attribute"),
      identifier: "date.quarterOfYear"
      /**
       * Display Form Title: Date - Quarter of Year
       * Display Form ID: date.quarterOfYear
       */,
      Default: newAttribute("date.quarterOfYear"),
    },
  }
  /**
   * Date Data Set Title: Imventory month
   * Date Data Set ID: imventory_month
   */,
  ImventoryMonth: {
    ref: idRef("imventory_month", "dataSet"),
    identifier: "imventory_month"
    /**
     * Date Attribute: Imventory month - Minute
     * Date Attribute ID: imventory_month.minute
     */,
    ImventoryMonthMinute: {
      ref: idRef("imventory_month.minute", "attribute"),
      identifier: "imventory_month.minute"
      /**
       * Display Form Title: Imventory month - Minute
       * Display Form ID: imventory_month.minute
       */,
      Default: newAttribute("imventory_month.minute"),
    }
    /**
     * Date Attribute: Imventory month - Hour
     * Date Attribute ID: imventory_month.hour
     */,
    ImventoryMonthHour: {
      ref: idRef("imventory_month.hour", "attribute"),
      identifier: "imventory_month.hour"
      /**
       * Display Form Title: Imventory month - Hour
       * Display Form ID: imventory_month.hour
       */,
      Default: newAttribute("imventory_month.hour"),
    }
    /**
     * Date Attribute: Imventory month - Date
     * Date Attribute ID: imventory_month.day
     */,
    ImventoryMonthDate: {
      ref: idRef("imventory_month.day", "attribute"),
      identifier: "imventory_month.day"
      /**
       * Display Form Title: Imventory month - Date
       * Display Form ID: imventory_month.day
       */,
      Default: newAttribute("imventory_month.day"),
    }
    /**
     * Date Attribute: Imventory month - Week/Year
     * Date Attribute ID: imventory_month.week
     */,
    ImventoryMonthWeekYear: {
      ref: idRef("imventory_month.week", "attribute"),
      identifier: "imventory_month.week"
      /**
       * Display Form Title: Imventory month - Week/Year
       * Display Form ID: imventory_month.week
       */,
      Default: newAttribute("imventory_month.week"),
    }
    /**
     * Date Attribute: Imventory month - Month/Year
     * Date Attribute ID: imventory_month.month
     */,
    ImventoryMonthMonthYear: {
      ref: idRef("imventory_month.month", "attribute"),
      identifier: "imventory_month.month"
      /**
       * Display Form Title: Imventory month - Month/Year
       * Display Form ID: imventory_month.month
       */,
      Default: newAttribute("imventory_month.month"),
    }
    /**
     * Date Attribute: Imventory month - Quarter/Year
     * Date Attribute ID: imventory_month.quarter
     */,
    ImventoryMonthQuarterYear: {
      ref: idRef("imventory_month.quarter", "attribute"),
      identifier: "imventory_month.quarter"
      /**
       * Display Form Title: Imventory month - Quarter/Year
       * Display Form ID: imventory_month.quarter
       */,
      Default: newAttribute("imventory_month.quarter"),
    }
    /**
     * Date Attribute: Imventory month - Year
     * Date Attribute ID: imventory_month.year
     */,
    ImventoryMonthYear: {
      ref: idRef("imventory_month.year", "attribute"),
      identifier: "imventory_month.year"
      /**
       * Display Form Title: Imventory month - Year
       * Display Form ID: imventory_month.year
       */,
      Default: newAttribute("imventory_month.year"),
    }
    /**
     * Date Attribute: Imventory month - Minute of Hour
     * Date Attribute ID: imventory_month.minuteOfHour
     */,
    ImventoryMonthMinuteOfHour: {
      ref: idRef("imventory_month.minuteOfHour", "attribute"),
      identifier: "imventory_month.minuteOfHour"
      /**
       * Display Form Title: Imventory month - Minute of Hour
       * Display Form ID: imventory_month.minuteOfHour
       */,
      Default: newAttribute("imventory_month.minuteOfHour"),
    }
    /**
     * Date Attribute: Imventory month - Hour of Day
     * Date Attribute ID: imventory_month.hourOfDay
     */,
    ImventoryMonthHourOfDay: {
      ref: idRef("imventory_month.hourOfDay", "attribute"),
      identifier: "imventory_month.hourOfDay"
      /**
       * Display Form Title: Imventory month - Hour of Day
       * Display Form ID: imventory_month.hourOfDay
       */,
      Default: newAttribute("imventory_month.hourOfDay"),
    }
    /**
     * Date Attribute: Imventory month - Day of Week
     * Date Attribute ID: imventory_month.dayOfWeek
     */,
    ImventoryMonthDayOfWeek: {
      ref: idRef("imventory_month.dayOfWeek", "attribute"),
      identifier: "imventory_month.dayOfWeek"
      /**
       * Display Form Title: Imventory month - Day of Week
       * Display Form ID: imventory_month.dayOfWeek
       */,
      Default: newAttribute("imventory_month.dayOfWeek"),
    }
    /**
     * Date Attribute: Imventory month - Day of Month
     * Date Attribute ID: imventory_month.dayOfMonth
     */,
    ImventoryMonthDayOfMonth: {
      ref: idRef("imventory_month.dayOfMonth", "attribute"),
      identifier: "imventory_month.dayOfMonth"
      /**
       * Display Form Title: Imventory month - Day of Month
       * Display Form ID: imventory_month.dayOfMonth
       */,
      Default: newAttribute("imventory_month.dayOfMonth"),
    }
    /**
     * Date Attribute: Imventory month - Day of Year
     * Date Attribute ID: imventory_month.dayOfYear
     */,
    ImventoryMonthDayOfYear: {
      ref: idRef("imventory_month.dayOfYear", "attribute"),
      identifier: "imventory_month.dayOfYear"
      /**
       * Display Form Title: Imventory month - Day of Year
       * Display Form ID: imventory_month.dayOfYear
       */,
      Default: newAttribute("imventory_month.dayOfYear"),
    }
    /**
     * Date Attribute: Imventory month - Week of Year
     * Date Attribute ID: imventory_month.weekOfYear
     */,
    ImventoryMonthWeekOfYear: {
      ref: idRef("imventory_month.weekOfYear", "attribute"),
      identifier: "imventory_month.weekOfYear"
      /**
       * Display Form Title: Imventory month - Week of Year
       * Display Form ID: imventory_month.weekOfYear
       */,
      Default: newAttribute("imventory_month.weekOfYear"),
    }
    /**
     * Date Attribute: Imventory month - Month of Year
     * Date Attribute ID: imventory_month.monthOfYear
     */,
    ImventoryMonthMonthOfYear: {
      ref: idRef("imventory_month.monthOfYear", "attribute"),
      identifier: "imventory_month.monthOfYear"
      /**
       * Display Form Title: Imventory month - Month of Year
       * Display Form ID: imventory_month.monthOfYear
       */,
      Default: newAttribute("imventory_month.monthOfYear"),
    }
    /**
     * Date Attribute: Imventory month - Quarter of Year
     * Date Attribute ID: imventory_month.quarterOfYear
     */,
    ImventoryMonthQuarterOfYear: {
      ref: idRef("imventory_month.quarterOfYear", "attribute"),
      identifier: "imventory_month.quarterOfYear"
      /**
       * Display Form Title: Imventory month - Quarter of Year
       * Display Form ID: imventory_month.quarterOfYear
       */,
      Default: newAttribute("imventory_month.quarterOfYear"),
    },
  }
  /**
   * Date Data Set Title: Order date
   * Date Data Set ID: order_date
   */,
  OrderDate: {
    ref: idRef("order_date", "dataSet"),
    identifier: "order_date"
    /**
     * Date Attribute: Order date - Minute
     * Date Attribute ID: order_date.minute
     */,
    OrderDateMinute: {
      ref: idRef("order_date.minute", "attribute"),
      identifier: "order_date.minute"
      /**
       * Display Form Title: Order date - Minute
       * Display Form ID: order_date.minute
       */,
      Default: newAttribute("order_date.minute"),
    }
    /**
     * Date Attribute: Order date - Hour
     * Date Attribute ID: order_date.hour
     */,
    OrderDateHour: {
      ref: idRef("order_date.hour", "attribute"),
      identifier: "order_date.hour"
      /**
       * Display Form Title: Order date - Hour
       * Display Form ID: order_date.hour
       */,
      Default: newAttribute("order_date.hour"),
    }
    /**
     * Date Attribute: Order date - Date
     * Date Attribute ID: order_date.day
     */,
    OrderDateDate: {
      ref: idRef("order_date.day", "attribute"),
      identifier: "order_date.day"
      /**
       * Display Form Title: Order date - Date
       * Display Form ID: order_date.day
       */,
      Default: newAttribute("order_date.day"),
    }
    /**
     * Date Attribute: Order date - Week/Year
     * Date Attribute ID: order_date.week
     */,
    OrderDateWeekYear: {
      ref: idRef("order_date.week", "attribute"),
      identifier: "order_date.week"
      /**
       * Display Form Title: Order date - Week/Year
       * Display Form ID: order_date.week
       */,
      Default: newAttribute("order_date.week"),
    }
    /**
     * Date Attribute: Order date - Month/Year
     * Date Attribute ID: order_date.month
     */,
    OrderDateMonthYear: {
      ref: idRef("order_date.month", "attribute"),
      identifier: "order_date.month"
      /**
       * Display Form Title: Order date - Month/Year
       * Display Form ID: order_date.month
       */,
      Default: newAttribute("order_date.month"),
    }
    /**
     * Date Attribute: Order date - Quarter/Year
     * Date Attribute ID: order_date.quarter
     */,
    OrderDateQuarterYear: {
      ref: idRef("order_date.quarter", "attribute"),
      identifier: "order_date.quarter"
      /**
       * Display Form Title: Order date - Quarter/Year
       * Display Form ID: order_date.quarter
       */,
      Default: newAttribute("order_date.quarter"),
    }
    /**
     * Date Attribute: Order date - Year
     * Date Attribute ID: order_date.year
     */,
    OrderDateYear: {
      ref: idRef("order_date.year", "attribute"),
      identifier: "order_date.year"
      /**
       * Display Form Title: Order date - Year
       * Display Form ID: order_date.year
       */,
      Default: newAttribute("order_date.year"),
    }
    /**
     * Date Attribute: Order date - Minute of Hour
     * Date Attribute ID: order_date.minuteOfHour
     */,
    OrderDateMinuteOfHour: {
      ref: idRef("order_date.minuteOfHour", "attribute"),
      identifier: "order_date.minuteOfHour"
      /**
       * Display Form Title: Order date - Minute of Hour
       * Display Form ID: order_date.minuteOfHour
       */,
      Default: newAttribute("order_date.minuteOfHour"),
    }
    /**
     * Date Attribute: Order date - Hour of Day
     * Date Attribute ID: order_date.hourOfDay
     */,
    OrderDateHourOfDay: {
      ref: idRef("order_date.hourOfDay", "attribute"),
      identifier: "order_date.hourOfDay"
      /**
       * Display Form Title: Order date - Hour of Day
       * Display Form ID: order_date.hourOfDay
       */,
      Default: newAttribute("order_date.hourOfDay"),
    }
    /**
     * Date Attribute: Order date - Day of Week
     * Date Attribute ID: order_date.dayOfWeek
     */,
    OrderDateDayOfWeek: {
      ref: idRef("order_date.dayOfWeek", "attribute"),
      identifier: "order_date.dayOfWeek"
      /**
       * Display Form Title: Order date - Day of Week
       * Display Form ID: order_date.dayOfWeek
       */,
      Default: newAttribute("order_date.dayOfWeek"),
    }
    /**
     * Date Attribute: Order date - Day of Month
     * Date Attribute ID: order_date.dayOfMonth
     */,
    OrderDateDayOfMonth: {
      ref: idRef("order_date.dayOfMonth", "attribute"),
      identifier: "order_date.dayOfMonth"
      /**
       * Display Form Title: Order date - Day of Month
       * Display Form ID: order_date.dayOfMonth
       */,
      Default: newAttribute("order_date.dayOfMonth"),
    }
    /**
     * Date Attribute: Order date - Day of Year
     * Date Attribute ID: order_date.dayOfYear
     */,
    OrderDateDayOfYear: {
      ref: idRef("order_date.dayOfYear", "attribute"),
      identifier: "order_date.dayOfYear"
      /**
       * Display Form Title: Order date - Day of Year
       * Display Form ID: order_date.dayOfYear
       */,
      Default: newAttribute("order_date.dayOfYear"),
    }
    /**
     * Date Attribute: Order date - Week of Year
     * Date Attribute ID: order_date.weekOfYear
     */,
    OrderDateWeekOfYear: {
      ref: idRef("order_date.weekOfYear", "attribute"),
      identifier: "order_date.weekOfYear"
      /**
       * Display Form Title: Order date - Week of Year
       * Display Form ID: order_date.weekOfYear
       */,
      Default: newAttribute("order_date.weekOfYear"),
    }
    /**
     * Date Attribute: Order date - Month of Year
     * Date Attribute ID: order_date.monthOfYear
     */,
    OrderDateMonthOfYear: {
      ref: idRef("order_date.monthOfYear", "attribute"),
      identifier: "order_date.monthOfYear"
      /**
       * Display Form Title: Order date - Month of Year
       * Display Form ID: order_date.monthOfYear
       */,
      Default: newAttribute("order_date.monthOfYear"),
    }
    /**
     * Date Attribute: Order date - Quarter of Year
     * Date Attribute ID: order_date.quarterOfYear
     */,
    OrderDateQuarterOfYear: {
      ref: idRef("order_date.quarterOfYear", "attribute"),
      identifier: "order_date.quarterOfYear"
      /**
       * Display Form Title: Order date - Quarter of Year
       * Display Form ID: order_date.quarterOfYear
       */,
      Default: newAttribute("order_date.quarterOfYear"),
    },
  }
  /**
   * Date Data Set Title: Return date
   * Date Data Set ID: return_date
   */,
  ReturnDate: {
    ref: idRef("return_date", "dataSet"),
    identifier: "return_date"
    /**
     * Date Attribute: Return date - Minute
     * Date Attribute ID: return_date.minute
     */,
    ReturnDateMinute: {
      ref: idRef("return_date.minute", "attribute"),
      identifier: "return_date.minute"
      /**
       * Display Form Title: Return date - Minute
       * Display Form ID: return_date.minute
       */,
      Default: newAttribute("return_date.minute"),
    }
    /**
     * Date Attribute: Return date - Hour
     * Date Attribute ID: return_date.hour
     */,
    ReturnDateHour: {
      ref: idRef("return_date.hour", "attribute"),
      identifier: "return_date.hour"
      /**
       * Display Form Title: Return date - Hour
       * Display Form ID: return_date.hour
       */,
      Default: newAttribute("return_date.hour"),
    }
    /**
     * Date Attribute: Return date - Date
     * Date Attribute ID: return_date.day
     */,
    ReturnDateDate: {
      ref: idRef("return_date.day", "attribute"),
      identifier: "return_date.day"
      /**
       * Display Form Title: Return date - Date
       * Display Form ID: return_date.day
       */,
      Default: newAttribute("return_date.day"),
    }
    /**
     * Date Attribute: Return date - Week/Year
     * Date Attribute ID: return_date.week
     */,
    ReturnDateWeekYear: {
      ref: idRef("return_date.week", "attribute"),
      identifier: "return_date.week"
      /**
       * Display Form Title: Return date - Week/Year
       * Display Form ID: return_date.week
       */,
      Default: newAttribute("return_date.week"),
    }
    /**
     * Date Attribute: Return date - Month/Year
     * Date Attribute ID: return_date.month
     */,
    ReturnDateMonthYear: {
      ref: idRef("return_date.month", "attribute"),
      identifier: "return_date.month"
      /**
       * Display Form Title: Return date - Month/Year
       * Display Form ID: return_date.month
       */,
      Default: newAttribute("return_date.month"),
    }
    /**
     * Date Attribute: Return date - Quarter/Year
     * Date Attribute ID: return_date.quarter
     */,
    ReturnDateQuarterYear: {
      ref: idRef("return_date.quarter", "attribute"),
      identifier: "return_date.quarter"
      /**
       * Display Form Title: Return date - Quarter/Year
       * Display Form ID: return_date.quarter
       */,
      Default: newAttribute("return_date.quarter"),
    }
    /**
     * Date Attribute: Return date - Year
     * Date Attribute ID: return_date.year
     */,
    ReturnDateYear: {
      ref: idRef("return_date.year", "attribute"),
      identifier: "return_date.year"
      /**
       * Display Form Title: Return date - Year
       * Display Form ID: return_date.year
       */,
      Default: newAttribute("return_date.year"),
    }
    /**
     * Date Attribute: Return date - Minute of Hour
     * Date Attribute ID: return_date.minuteOfHour
     */,
    ReturnDateMinuteOfHour: {
      ref: idRef("return_date.minuteOfHour", "attribute"),
      identifier: "return_date.minuteOfHour"
      /**
       * Display Form Title: Return date - Minute of Hour
       * Display Form ID: return_date.minuteOfHour
       */,
      Default: newAttribute("return_date.minuteOfHour"),
    }
    /**
     * Date Attribute: Return date - Hour of Day
     * Date Attribute ID: return_date.hourOfDay
     */,
    ReturnDateHourOfDay: {
      ref: idRef("return_date.hourOfDay", "attribute"),
      identifier: "return_date.hourOfDay"
      /**
       * Display Form Title: Return date - Hour of Day
       * Display Form ID: return_date.hourOfDay
       */,
      Default: newAttribute("return_date.hourOfDay"),
    }
    /**
     * Date Attribute: Return date - Day of Week
     * Date Attribute ID: return_date.dayOfWeek
     */,
    ReturnDateDayOfWeek: {
      ref: idRef("return_date.dayOfWeek", "attribute"),
      identifier: "return_date.dayOfWeek"
      /**
       * Display Form Title: Return date - Day of Week
       * Display Form ID: return_date.dayOfWeek
       */,
      Default: newAttribute("return_date.dayOfWeek"),
    }
    /**
     * Date Attribute: Return date - Day of Month
     * Date Attribute ID: return_date.dayOfMonth
     */,
    ReturnDateDayOfMonth: {
      ref: idRef("return_date.dayOfMonth", "attribute"),
      identifier: "return_date.dayOfMonth"
      /**
       * Display Form Title: Return date - Day of Month
       * Display Form ID: return_date.dayOfMonth
       */,
      Default: newAttribute("return_date.dayOfMonth"),
    }
    /**
     * Date Attribute: Return date - Day of Year
     * Date Attribute ID: return_date.dayOfYear
     */,
    ReturnDateDayOfYear: {
      ref: idRef("return_date.dayOfYear", "attribute"),
      identifier: "return_date.dayOfYear"
      /**
       * Display Form Title: Return date - Day of Year
       * Display Form ID: return_date.dayOfYear
       */,
      Default: newAttribute("return_date.dayOfYear"),
    }
    /**
     * Date Attribute: Return date - Week of Year
     * Date Attribute ID: return_date.weekOfYear
     */,
    ReturnDateWeekOfYear: {
      ref: idRef("return_date.weekOfYear", "attribute"),
      identifier: "return_date.weekOfYear"
      /**
       * Display Form Title: Return date - Week of Year
       * Display Form ID: return_date.weekOfYear
       */,
      Default: newAttribute("return_date.weekOfYear"),
    }
    /**
     * Date Attribute: Return date - Month of Year
     * Date Attribute ID: return_date.monthOfYear
     */,
    ReturnDateMonthOfYear: {
      ref: idRef("return_date.monthOfYear", "attribute"),
      identifier: "return_date.monthOfYear"
      /**
       * Display Form Title: Return date - Month of Year
       * Display Form ID: return_date.monthOfYear
       */,
      Default: newAttribute("return_date.monthOfYear"),
    }
    /**
     * Date Attribute: Return date - Quarter of Year
     * Date Attribute ID: return_date.quarterOfYear
     */,
    ReturnDateQuarterOfYear: {
      ref: idRef("return_date.quarterOfYear", "attribute"),
      identifier: "return_date.quarterOfYear"
      /**
       * Display Form Title: Return date - Quarter of Year
       * Display Form ID: return_date.quarterOfYear
       */,
      Default: newAttribute("return_date.quarterOfYear"),
    },
  },
};
export const Insights = {
  /**
   * Insight Title: Oders / Quarters
   * Insight ID: 4e6d57b9-4211-4148-8193-480d137f2f8f
   */
  OdersQuarters: "4e6d57b9-4211-4148-8193-480d137f2f8f",
};
export const Dashboards = {
  /**
   * Dashboard Title: Overview of Company
   * Dashboard ID: 255f0722-b089-4f04-a61c-06c03e3da453
   */
  OverviewOfCompany: "255f0722-b089-4f04-a61c-06c03e3da453",
};
