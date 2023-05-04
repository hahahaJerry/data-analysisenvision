import pandas as pd

# 读取数据
df = pd.read_csv('us-counties-recent.csv')

# 转换日期格式
df['date'] = pd.to_datetime(df['date'])

# 筛选出2023年的数据
start_date = pd.to_datetime('2023-01-01')
end_date = pd.to_datetime('2023-12-31')
df = df.loc[(df['date'] >= start_date) & (df['date'] <= end_date)]
# 按州名分组，计算总确诊人数并按降序排序，取前12名
top_12_states = df.groupby('state').agg({'cases': 'max'}).sort_values(by='cases', ascending=False).head(12)
# 输出结果
for index, row in top_12_states.iterrows():
 print(f"{index} {row['cases']}")

