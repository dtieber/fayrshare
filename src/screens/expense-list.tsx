import { Table, TableProps } from 'antd'
import Title from 'antd/es/typography/Title'
import { useLoaderData } from 'react-router-dom'

import { expenses } from '../data/demo-expenses.ts'
import { Expense } from '../model/expense.ts'

export function ExpenseList() {
  const data = useLoaderData() as { expenses: Expense[] }

  const columns: TableProps<Expense>['columns'] = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (_, { amount }) => <>EUR {amount.toFixed(2)}</>,
    },
  ]

  return (
    <>
      <Title level={2}>Expense List</Title>
      <Table<Expense> columns={columns} dataSource={data.expenses} rowKey={'id'} pagination={false} />
    </>
  )
}

export const expenseListLoader = () => ({ expenses })
