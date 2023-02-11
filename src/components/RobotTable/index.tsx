import { useState } from 'react'
import {
  TablePagination,
  Toolbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'

import TitleGradient from '@components/TitleGradient'
import SearchInput from '@components/SearchInput'
import StatusIndicator from '@components/StatusIndicator'
import NameAndId from '@components/NameAndId'
import LocationLink from '@components/LocationLink'
import BatteryLevel from '@components/BatteryLevel'
import NetworkIndicator from '@components/NetworkIndicator'

// Table states
import EmptyTable from './TableStates/EmptyTable'
import ErrorTable from './TableStates/ErrorTable'
import LoadingTable from './TableStates/LoadingTable'

const HEADERS = [
  'Status',
  'Name & Id',
  'Last Updated',
  'Location',
  'Battery',
  'Connection',
]

type TableHeaderProps = {
  onSearch: ({ query }?: { query: string }) => any
}
const TableHeader = ({ onSearch }: TableHeaderProps) => {
  return (
    <Toolbar
      sx={{
        display: 'flex',
        flexDirection: { md: 'row', sm: 'column', xs: 'column' },
        justifyContent: 'space-between',
        alignItems: { md: 'center', sm: 'flex-start', xs: 'flex-start' },
      }}
    >
      <TitleGradient component="h5" variant="h5">
        This are your Robots
      </TitleGradient>
      <SearchInput onSearch={onSearch} />
    </Toolbar>
  )
}

type RobotTableProps = {
  robots: RobotData[] | null
  error: Error | null
  isLoading: boolean
  // @ts-ignore::Property 'query' does not exist on type '{ query: string; } | undefined'.ts(2339)
  searchData: ({ query }?: { query: string }) => any
}

const RobotTable = ({
  robots,
  error,
  isLoading,
  searchData,
}: RobotTableProps) => {
  const [tableConfig, setTableConfig] = useState({
    rowsPerPageOptions: [5, 10, 25, 50, 100],
    rowsPerPage: 5,
    page: 0,
  })

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTableConfig({
      ...tableConfig,
      rowsPerPage: parseInt(event.target.value, 10),
      page: 0,
    })
  }
  const handlePageChange = (_: unknown, newPage: number) => {
    setTableConfig({ ...tableConfig, page: newPage })
  }

  // Slice the data in order to paginate
  const paginatedRows = (robots || []).slice(
    tableConfig.page * tableConfig.rowsPerPage,
    tableConfig.page * tableConfig.rowsPerPage + tableConfig.rowsPerPage
  )

  return (
    <>
      <TableContainer component={Paper}>
        <TableHeader onSearch={searchData} />
        <Table aria-label="robots table">
          <TableHead>
            <TableRow>
              {HEADERS.map(head => (
                <TableCell key={head} align="center">
                  {head}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody sx={{ width: '100%' }}>
            {/* Loading data state */}
            {isLoading && <LoadingTable />}
            {/* Display error in case api fails */}
            {!isLoading && error && <ErrorTable error={error} />}
            {/* Display message in case data is empty */}
            {!isLoading && robots && paginatedRows.length <= 0 && (
              <EmptyTable />
            )}
            {/* Display data */}
            {!isLoading &&
              robots &&
              paginatedRows.length > 0 &&
              paginatedRows.map((row, index) => (
                <TableRow
                  key={`${index}_${row.assemblyCode}`}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  hover
                >
                  <TableCell align="center" component="th" scope="row">
                    <StatusIndicator status={row.status} />
                  </TableCell>
                  <TableCell align="center">
                    <NameAndId name={row.name} id={row.assemblyCode} />
                  </TableCell>
                  <TableCell align="center">
                    {new Date(row.robotStats.updatedOn).toLocaleString('ja-JP')}
                  </TableCell>
                  <TableCell align="center">
                    <LocationLink venue={row.venue} />
                  </TableCell>
                  <TableCell align="center">
                    <BatteryLevel
                      isCharging={row.robotStats.isCharging}
                      batteryLevel={row.robotStats.batteryLevel}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <NetworkIndicator
                      networkConnected={row.robotStats.networkConnected}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={robots?.length ?? 0}
        rowsPerPageOptions={tableConfig.rowsPerPageOptions}
        rowsPerPage={tableConfig.rowsPerPage}
        page={tableConfig.page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </>
  )
}

export default RobotTable
