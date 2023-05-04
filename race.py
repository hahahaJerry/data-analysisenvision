import pandas as pd

data = pd.read_csv('df_c19d_state_eth_pop.csv')
result = data.groupby(['State', 'Race and Hispanic Origin Group']).agg({
    'COVID-19 Deaths': 'sum',
    'Population': 'sum'
})

result['Death Rate'] = result['COVID-19 Deaths'] / result['Population'] * 1_000_000
print(result)