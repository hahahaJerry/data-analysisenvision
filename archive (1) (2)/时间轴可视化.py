import pandas as pd
# 读取数据
df = pd.read_csv('us-states.csv')

# 将date列转换为日期格式
df['date'] = pd.to_datetime(df['date'])

# 筛选出2020年1月22日到6月17日之间的数据
start_date = pd.to_datetime('2020-01-22')
end_date = pd.to_datetime('2020-06-17')
df = df.loc[(df['date'] >= start_date) & (df['date'] <= end_date)]

# 按日期分组，然后对每一组的cases进行排序并取前10
top_10_cases_by_date = df.groupby('date').apply(lambda x: x.nlargest(10, 'cases'))

# 按state和date分组，然后对每一组的cases进行排序并取前10
top_10_cases_by_state = df.groupby(['state', 'date']).apply(lambda x: x.nlargest(10, 'cases'))

# 将结果写入新的csv文件
top_10_cases_by_date.to_csv('top_10_cases_by_date.csv')
top_10_cases_by_state.to_csv('top_10_cases_by_state.csv')
