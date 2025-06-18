const mockupData = [
  {
      "ID": 1,
      "CreatedAt": "2025-06-16T12:09:08.22836+07:00",
      "UpdatedAt": "2025-06-18T14:38:47.282723+07:00",
      "DeletedAt": null,
      "Name": "Drone",
      "Description": "Damoda V3",
      "Quantity": 784,
      "Status": "Normal",
      "CategoryID": 1,
      "Category": {
          "ID": 1,
          "CreatedAt": "2025-06-15T21:25:56.746031+07:00",
          "UpdatedAt": "2025-06-15T21:29:33.439199+07:00",
          "DeletedAt": null,
          "Name": "Drone",
          "Description": ""
      },
      "Remark": ""
  },
  {
      "ID": 2,
      "CreatedAt": "2025-06-16T12:22:09.806527+07:00",
      "UpdatedAt": "2025-06-18T14:39:41.680218+07:00",
      "DeletedAt": null,
      "Name": "Drone",
      "Description": "Damoda V3",
      "Quantity": 11,
      "Status": "Spare",
      "CategoryID": 1,
      "Category": {
          "ID": 1,
          "CreatedAt": "2025-06-15T21:25:56.746031+07:00",
          "UpdatedAt": "2025-06-15T21:29:33.439199+07:00",
          "DeletedAt": null,
          "Name": "Drone",
          "Description": ""
      },
      "Remark": ""
  },
  {
      "ID": 3,
      "CreatedAt": "2025-06-16T12:22:49.363474+07:00",
      "UpdatedAt": "2025-06-18T14:40:10.983767+07:00",
      "DeletedAt": null,
      "Name": "Drone",
      "Description": "Damoda V3",
      "Quantity": 7,
      "Status": "Barely usable",
      "CategoryID": 1,
      "Category": {
          "ID": 1,
          "CreatedAt": "2025-06-15T21:25:56.746031+07:00",
          "UpdatedAt": "2025-06-15T21:29:33.439199+07:00",
          "DeletedAt": null,
          "Name": "Drone",
          "Description": ""
      },
      "Remark": ""
  },
  {
      "ID": 4,
      "CreatedAt": "2025-06-16T12:23:32.63248+07:00",
      "UpdatedAt": "2025-06-18T14:40:48.070702+07:00",
      "DeletedAt": null,
      "Name": "Drone",
      "Description": "Damoda V3",
      "Quantity": 22,
      "Status": "Broken",
      "CategoryID": 1,
      "Category": {
          "ID": 1,
          "CreatedAt": "2025-06-15T21:25:56.746031+07:00",
          "UpdatedAt": "2025-06-15T21:29:33.439199+07:00",
          "DeletedAt": null,
          "Name": "Drone",
          "Description": ""
      },
      "Remark": ""
  },
  {
      "ID": 5,
      "CreatedAt": "2025-06-16T12:26:10.353432+07:00",
      "UpdatedAt": "2025-06-18T14:41:20.362087+07:00",
      "DeletedAt": null,
      "Name": "Drone",
      "Description": "Damoda V3",
      "Quantity": 11,
      "Status": "Claim required",
      "CategoryID": 1,
      "Category": {
          "ID": 1,
          "CreatedAt": "2025-06-15T21:25:56.746031+07:00",
          "UpdatedAt": "2025-06-15T21:29:33.439199+07:00",
          "DeletedAt": null,
          "Name": "Drone",
          "Description": ""
      },
      "Remark": ""
  },
  {
      "ID": 6,
      "CreatedAt": "2025-06-16T12:28:32.548899+07:00",
      "UpdatedAt": "2025-06-16T12:28:32.548899+07:00",
      "DeletedAt": null,
      "Name": "Battery",
      "Description": "Damoda V3",
      "Quantity": 919,
      "Status": "Normal",
      "CategoryID": 2,
      "Category": {
          "ID": 2,
          "CreatedAt": "2025-06-15T21:26:21.474222+07:00",
          "UpdatedAt": "2025-06-15T21:26:21.474222+07:00",
          "DeletedAt": null,
          "Name": "Battery",
          "Description": ""
      },
      "Remark": "Lot1 + Lot2"
  },
  {
      "ID": 7,
      "CreatedAt": "2025-06-16T12:29:29.014272+07:00",
      "UpdatedAt": "2025-06-16T12:29:29.014272+07:00",
      "DeletedAt": null,
      "Name": "Battery",
      "Description": "Damoda V3",
      "Quantity": 103,
      "Status": "BMS Cut-Off",
      "CategoryID": 2,
      "Category": {
          "ID": 2,
          "CreatedAt": "2025-06-15T21:26:21.474222+07:00",
          "UpdatedAt": "2025-06-15T21:26:21.474222+07:00",
          "DeletedAt": null,
          "Name": "Battery",
          "Description": ""
      },
      "Remark": "Lot1 + Lot2"
  },
  {
      "ID": 8,
      "CreatedAt": "2025-06-16T12:30:22.325748+07:00",
      "UpdatedAt": "2025-06-16T12:30:22.325748+07:00",
      "DeletedAt": null,
      "Name": "Battery",
      "Description": "Damoda V3",
      "Quantity": 28,
      "Status": "High MIV (>25)",
      "CategoryID": 2,
      "Category": {
          "ID": 2,
          "CreatedAt": "2025-06-15T21:26:21.474222+07:00",
          "UpdatedAt": "2025-06-15T21:26:21.474222+07:00",
          "DeletedAt": null,
          "Name": "Battery",
          "Description": ""
      },
      "Remark": "Lot1 + Lot2"
  },
  {
      "ID": 9,
      "CreatedAt": "2025-06-16T12:30:58.159914+07:00",
      "UpdatedAt": "2025-06-16T12:30:58.159914+07:00",
      "DeletedAt": null,
      "Name": "Battery",
      "Description": "Damoda V3",
      "Quantity": 5,
      "Status": "Detect 1 cell",
      "CategoryID": 2,
      "Category": {
          "ID": 2,
          "CreatedAt": "2025-06-15T21:26:21.474222+07:00",
          "UpdatedAt": "2025-06-15T21:26:21.474222+07:00",
          "DeletedAt": null,
          "Name": "Battery",
          "Description": ""
      },
      "Remark": "Lot1 + Lot2"
  },
  {
      "ID": 10,
      "CreatedAt": "2025-06-16T12:31:13.946934+07:00",
      "UpdatedAt": "2025-06-16T12:31:13.946934+07:00",
      "DeletedAt": null,
      "Name": "Battery",
      "Description": "Damoda V3",
      "Quantity": 5,
      "Status": "Broken",
      "CategoryID": 2,
      "Category": {
          "ID": 2,
          "CreatedAt": "2025-06-15T21:26:21.474222+07:00",
          "UpdatedAt": "2025-06-15T21:26:21.474222+07:00",
          "DeletedAt": null,
          "Name": "Battery",
          "Description": ""
      },
      "Remark": "Lot1 + Lot2"
  },
  {
      "ID": 11,
      "CreatedAt": "2025-06-16T12:31:42.824004+07:00",
      "UpdatedAt": "2025-06-16T12:31:42.824004+07:00",
      "DeletedAt": null,
      "Name": "Battery",
      "Description": "Damoda V3",
      "Quantity": 40,
      "Status": "Claim Required",
      "CategoryID": 2,
      "Category": {
          "ID": 2,
          "CreatedAt": "2025-06-15T21:26:21.474222+07:00",
          "UpdatedAt": "2025-06-15T21:26:21.474222+07:00",
          "DeletedAt": null,
          "Name": "Battery",
          "Description": ""
      },
      "Remark": "Lot2"
  },
  {
      "ID": 12,
      "CreatedAt": "2025-06-16T12:41:38.560427+07:00",
      "UpdatedAt": "2025-06-18T14:30:21.786176+07:00",
      "DeletedAt": null,
      "Name": "Charger Panel",
      "Description": "Damoda V3",
      "Quantity": 4,
      "Status": "Normal",
      "CategoryID": 5,
      "Category": {
          "ID": 5,
          "CreatedAt": "2025-06-16T12:07:04.719417+07:00",
          "UpdatedAt": "2025-06-16T12:07:04.719417+07:00",
          "DeletedAt": null,
          "Name": "Charger",
          "Description": ""
      },
      "Remark": ""
  },
  {
      "ID": 13,
      "CreatedAt": "2025-06-16T12:42:15.429225+07:00",
      "UpdatedAt": "2025-06-18T14:31:25.399906+07:00",
      "DeletedAt": null,
      "Name": "Charger Panel",
      "Description": "Damoda V3",
      "Quantity": 17,
      "Status": "Partially usable",
      "CategoryID": 5,
      "Category": {
          "ID": 5,
          "CreatedAt": "2025-06-16T12:07:04.719417+07:00",
          "UpdatedAt": "2025-06-16T12:07:04.719417+07:00",
          "DeletedAt": null,
          "Name": "Charger",
          "Description": ""
      },
      "Remark": ""
  },
  {
      "ID": 14,
      "CreatedAt": "2025-06-16T12:44:01.613509+07:00",
      "UpdatedAt": "2025-06-18T14:32:40.502546+07:00",
      "DeletedAt": null,
      "Name": "Charger Panel",
      "Description": "Damoda V3",
      "Quantity": 2,
      "Status": "Broken",
      "CategoryID": 5,
      "Category": {
          "ID": 5,
          "CreatedAt": "2025-06-16T12:07:04.719417+07:00",
          "UpdatedAt": "2025-06-16T12:07:04.719417+07:00",
          "DeletedAt": null,
          "Name": "Charger",
          "Description": ""
      },
      "Remark": ""
  },
  {
      "ID": 15,
      "CreatedAt": "2025-06-16T12:44:31.583885+07:00",
      "UpdatedAt": "2025-06-18T14:33:21.990052+07:00",
      "DeletedAt": null,
      "Name": "Charger Power Supply",
      "Description": "Damoda V3",
      "Quantity": 21,
      "Status": "Normal",
      "CategoryID": 5,
      "Category": {
          "ID": 5,
          "CreatedAt": "2025-06-16T12:07:04.719417+07:00",
          "UpdatedAt": "2025-06-16T12:07:04.719417+07:00",
          "DeletedAt": null,
          "Name": "Charger",
          "Description": ""
      },
      "Remark": ""
  },
  {
      "ID": 16,
      "CreatedAt": "2025-06-16T12:44:55.040552+07:00",
      "UpdatedAt": "2025-06-18T14:33:42.918283+07:00",
      "DeletedAt": null,
      "Name": "Charger Power Supply",
      "Description": "Damoda V3",
      "Quantity": 2,
      "Status": "Broken",
      "CategoryID": 5,
      "Category": {
          "ID": 5,
          "CreatedAt": "2025-06-16T12:07:04.719417+07:00",
          "UpdatedAt": "2025-06-16T12:07:04.719417+07:00",
          "DeletedAt": null,
          "Name": "Charger",
          "Description": ""
      },
      "Remark": ""
  }
]
  
  export default mockupData;