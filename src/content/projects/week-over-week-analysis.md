---
title: "Week Over Week Analysis"
summary: "An advanced dynamic reporting system built to track volatile market fluctuations and operational efficiency across multi-region logistics chains."
category: "Business Intelligence"
tags: ["POWER BI", "SQL SERVER", "DAX", "PYTHON"]
imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
featured: true
order: 1
impact:
  - label: "LATENCY REDUCTION"
    value: "94%"
    description: "Reporting delay reduced from 48 hours to 3 hours automated refreshes."
  - label: "OPERATIONAL GAIN"
    value: "12h/wk"
    description: "Manual reporting hours saved for mid-level management teams."
  - label: "FORECAST ACCURACY"
    value: "+18%"
    description: "Improvement in MAPE variance tracking via weighted seasonality models."
stack:
  - name: "SQL Server"
    icon: "database"
  - name: "Python"
    icon: "python"
  - name: "Power BI"
    icon: "bar-chart"
  - name: "Azure Data Lake"
    icon: "cloud"
---

Stakeholders were struggling with a 48-hour data lag that prevented real-time decision-making during peak logistics windows. The existing legacy system failed to account for seasonal weighting, leading to skewed YoY comparisons that masked underlying operational inefficiencies.

### Process & Methodology

1. **Extraction**: Automated ETL pipelines via Python connecting to ERP APIs.
2. **Transformation**: SQL Server Stored Procedures for complex business logic layering.
3. **Modeling**: Star schema architecture in Power BI with optimized DAX measures.
4. **Deployment**: Automated refresh schedules with RLS (Row Level Security).
