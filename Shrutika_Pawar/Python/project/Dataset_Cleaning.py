import pandas as pd

df = pd.read_excel(r"C:\Users\Admin\Desktop\Streamline tech\interns\Shrutika_Pawar\Python\project\20200421_acaps_-_covid-19_goverment_measures_dataset_v9.xlsx",sheet_name='Database')
print(df.head())
print(df.shape)
print(df.columns)
print(df.info())

print("missing value")
missing_value=df.isnull().sum()
print(missing_value)
# Remove useless columns
df.drop(columns=['PCODE', 'Alternative source'], inplace=True)

# Fill missing values
df['ADMIN_LEVEL_NAME'] = df['ADMIN_LEVEL_NAME'].fillna("National")

df['COMMENTS'] = df['COMMENTS'].fillna("No Comments")

df['NON_COMPLIANCE'] = df['NON_COMPLIANCE'].fillna("Unknown")

df['SOURCE'] = df['SOURCE'].fillna("Unknown")

df['SOURCE_TYPE'] = df['SOURCE_TYPE'].fillna("Unknown")

df['LINK'] = df['LINK'].fillna("No Link")

# Remove rows with missing dates
df.dropna(subset=['DATE_IMPLEMENTED'], inplace=True)

# Check missing values again
print(df.isnull().sum())

print("Duplicate value")
print(df.duplicated().sum())

print(df.dtypes)

df.to_csv("cleaned_covid_data.csv", index=False)
