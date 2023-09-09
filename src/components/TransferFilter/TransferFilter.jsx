import { useState } from 'react'
import { Checkbox, ConfigProvider } from 'antd'

import classesFilters from './TransferFilter.module.scss'

const CheckboxGroup = Checkbox.Group

function TransferFilter() {
  const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']
  const defaultCheckedList = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']
  const [checkedList, setCheckedList] = useState(defaultCheckedList)
  const checkAll = plainOptions.length === checkedList.length
  const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length
  const onChange = (list) => {
    setCheckedList(list)
  }
  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : [])
  }
  return (
    <div className={classesFilters['transfer-filter-wrapper']}>
      <h4>Количество пересадок</h4>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: 'Roboto',
            fontSize: 13,
            fontWeight: 400,
            colorBorder: '#9ABBCE',
            colorPrimary: '#2196F3',
            colorWhite: '#FFF',
          },
        }}
      >
        <Checkbox
          className={classesFilters['transfer-filter-checkbox-all']}
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
        >
          Все
        </Checkbox>
        <CheckboxGroup
          className={classesFilters['transfer-filter-checkbox']}
          options={plainOptions}
          value={checkedList}
          onChange={onChange}
        />
      </ConfigProvider>
    </div>
  )
}

export default TransferFilter
