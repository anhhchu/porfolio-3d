from yahoo_fin import stock_info as si
import pprint
import pandas as pd
symbol = 'AAPL'  # Apple Inc.'s ticker symbol
# income_statement = si.get_income_statement(symbol)
# balance_sheet = si.get_balance_sheet(symbol)
# cash_flow = si.get_cash_flow(symbol)
# key_metrics = si.get_key_statistics(symbol)
# income_statement_json = income_statement.to_json(orient='table')
# balance_sheet_json = balance_sheet.to_json(orient='table')
# cash_flow_json = cash_flow.to_json(orient='table')
# key_metrics_json = key_metrics.to_json(orient='table')

# print(income_statement)
quote = si.get_quote_table(symbol)
print(quote["EPS (TTM)"])