---
title: "Logistics Cost Attribution"
summary: "An end-to-end data pipeline that accurately attributes logistics costs to individual shipments for granular profitability analysis."
category: "Data Engineering"
tags: ["SQL Server", "Power BI", "Azure Data Lake"]
imageUrl: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd6a5?q=80&w=2070&auto=format&fit=crop"
featured: false
order: 3
challenge: "Stakeholders lacked visibility into the actual profitability of specific routes and clients. Logistics costs were being aggregated at a global level, hiding the fact that 12% of shipments were actually operating at a loss due to hidden surcharge fees."
challengePoints:
  - "Inaccurate client billing for specific logistical surcharges."
  - "Inability to perform granular SKU-level margin analysis."
  - "Fragmented data sources across multiple shipping partners."
process:
  - title: "Pipeline Build"
    text: "Engineered automated data connectors for 5 different shipping carriers."
  - title: "Normalization"
    text: "Created a unified data schema for disparate shipping fee structures."
  - title: "Attribution"
    text: "Developed a weight-based cost allocation algorithm in SQL."
  - title: "Visualization"
    text: "Designed a Profitability Heatmap in Power BI for executive review."
impact:
  - label: "LOSS IDENTIFICATION"
    value: "$1.2M"
    description: "Uncovered annual losses from misattributed logistical surcharges."
  - label: "MARGIN CLARITY"
    value: "100%"
    description: "Achieved full visibility into route-level profitability."
  - label: "BILLING ACCURACY"
    value: "+15%"
    description: "Improvement in cost recovery through accurate client billing."
toolsApplied: ["Azure Data Factory", "SQL Server", "Power BI", "DAX"]
---
