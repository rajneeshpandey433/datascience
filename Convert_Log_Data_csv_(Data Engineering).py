
# Data.json to Excel file opt.xlsx

import json
import tablib
import os
from win32com.client import Dispatch


if __name__ == '__main__':
    log = []

    
    with open ('data.json') as data_file:
        for line in data_file:
            log.append(json.loads(line))

    #json data as a Excel
    data = tablib.Dataset()
    data.json = json.dumps(log)

    with open('opt.xlsx', 'wb') as f:
        f.write(data.xlsx)

    # columns in the Excel
    try:
        excel = Dispatch('Excel.Application')
        file = os.path.dirname(os.path.realpath(__file__)) + '\opt.xlsx'

        wb = excel.Workbooks.open (file)
        excel.Worksheets(1).Activate()
        excel.ActiveSheet.Columns.AutoFit()
        wb.Save()
    finally:
        wb.Close()