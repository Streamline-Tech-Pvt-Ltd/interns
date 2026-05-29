import pandas as pd
import matplotlib.pyplot as plt

# ---------------- LOAD DATA ----------------

df = pd.read_csv("cleaned_covid_data.csv")

# ---------------- KPI VALUES ----------------

total_country = df['COUNTRY'].nunique()
total_region = df['REGION'].nunique()
total_category = df['CATEGORY'].nunique()
total_measure = df['MEASURE'].nunique()

# ---------------- STYLE ----------------

plt.style.use('dark_background')

# ---------------- FIGURE ----------------

fig = plt.figure(figsize=(14, 8))
fig.patch.set_facecolor('#0f172a')

# Dashboard Title
fig.suptitle(
    "COVID-19 GLOBAL DASHBOARD",
    fontsize=20,
    fontweight='bold',
    color='white'
)

# ---------------- KPI CARDS ----------------

kpi_style = dict(
    fontsize=16,
    color='white',
    fontweight='bold',
    bbox=dict(
        boxstyle="round,pad=0.4",
        facecolor="#1e293b",
        edgecolor="#38bdf8",
        linewidth=2
    )
)

plt.figtext(0.10, 0.86,
            f"{total_country}\nCountries",
            **kpi_style)

plt.figtext(0.30, 0.86,
            f"{total_region}\nRegions",
            **kpi_style)

plt.figtext(0.50, 0.86,
            f"{total_category}\nCategories",
            **kpi_style)

plt.figtext(0.72, 0.86,
            f"{total_measure}\nMeasures",
            **kpi_style)

# ---------------- BAR CHART ----------------

ax1 = plt.subplot(2, 2, 1)

top_countries = df['COUNTRY'].value_counts().head(10)

ax1.bar(top_countries.index,
        top_countries.values)

ax1.set_title("Top 10 Countries",
              fontsize=15,
              fontweight='bold')

ax1.tick_params(axis='x', rotation=40)

# ---------------- PIE CHART ----------------

ax2 = plt.subplot(2, 2, 2)

category_counts = df['CATEGORY'].value_counts()

explode = [0.05] * len(category_counts)

ax2.pie(category_counts,
        labels=category_counts.index,
        autopct='%1.1f%%',
        explode=explode,
        shadow=True)

ax2.set_title("Category Distribution",
              fontsize=15,
              fontweight='bold')

# ---------------- LINE CHART ----------------
ax3 = plt.subplot(2, 2, 3)

date_counts = df['DATE_IMPLEMENTED'].value_counts().sort_index()

ax3.plot(date_counts.index[:20],
         date_counts.values[:20],
         marker='o',
         linewidth=3)

ax3.set_title("Measures Over Time",
              fontsize=15,
              fontweight='bold')

ax3.tick_params(axis='x', rotation=45)

# ---------------- HISTOGRAM ----------------

ax4 = plt.subplot(2, 2, 4)

measure_lengths = df['MEASURE'].astype(str).apply(len)

ax4.hist(measure_lengths)

ax4.set_title("Measure Length Distribution",
              fontsize=15,
              fontweight='bold')

# ---------------- LAYOUT ----------------

plt.tight_layout(rect=[0, 0, 1, 0.83])

# ---------------- SHOW ----------------

plt.show()