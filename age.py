import pandas as pd

data = pd.read_csv('df_c19d_state_agegroup_pop.csv')
age_group_deaths = data.groupby('Age Group')['COVID-19 Deaths'].sum()
print(age_group_deaths)