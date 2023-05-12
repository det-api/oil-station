import { number, object, string } from "zod";

export const stationDetailSchema = object({
  body: object({
    name: string({
      required_error: "name is required",
    }),
    location: string({
      required_error: "location is required",
    }),
    lienseNo: string({
      required_error: "lienseNo is required",
    }),
  }),
});

export const allSchemaId = object({
  query: object({
    _id: string({
      required_error: "no data with that id",
    }).regex(/^[0-9a-fA-F]{24}$/, "invlid id"),
  }),
});

export const dailyPriceSchema = object({
  body: object({
    92: number({
      required_error: "92 price is required",
    }),
    95: number({
      required_error: "95 price is required",
    }),
    HSD: number({
      required_error: "HSD price is required",
    }),
    PHSD: number({
      required_error: "PHSD price is required",
    }),
    stationId: string({
      required_error: "station id is required",
    }),
  }),
});

export const dailyReportSchema = object({
  body: object({
    stationId: string({
      required_error: "you need stationId",
    }).regex(/^[0-9a-fA-F]{24}$/, "invlid id"),
  }),
});

export const detailSaleSchema = object({
  body: object({
    vocono: string({
      required_error: "vocono is required",
    }),
    nozzleNo: string({
      required_error: "nozzleNo is required",
    }),
    fuelType: string({
      required_error: "fuelType is required",
    }),
  }),
});

export const fuelInSchema = object({
    body: object({
        driver: string({
        required_error: "name is required",
      }),
      bowser: string({
        required_error: "location is required",
      }),
      fuelName: string({
        required_error: "fuelName is required",
      }),
      tank: string({
        required_error: "tank is required",
      }),
      station: string({
        required_error: "station is required",
      }),
      recieveVolume: string({
        required_error: "recieveVolume is required",
      }),
    }),
  });
  
