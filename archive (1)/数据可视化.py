import pandas as pd

# 读取数据
df = pd.read_csv('us.csv')

# 将日期列转换为日期格式
df['date'] = pd.to_datetime(df['date'])

# 筛选出2020年1-12月的数据
start_date = pd.to_datetime('2022-01-01')
end_date = pd.to_datetime('2022-12-31')
df = df.loc[(df['date'] >= start_date) & (df['date'] <= end_date)]

# 按日期分组，取每组中日期最大的行
latest_by_month = df.groupby(pd.Grouper(key='date', freq='M')).apply(lambda x: x[x['date'] == x['date'].max()])

# 打印输出结果
print(latest_by_month)
