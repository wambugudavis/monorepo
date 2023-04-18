import {
    TopNavigation,
    DataTable,
    Table,
    TableCell,
    TableRow,
    TableBody,
    TableHeader,
    TableHead,
    Button
} from "ui";
import Head from 'next/head';

export default function Home() {
    const patients = [
        {
            name: 'John Doe',
            mobile: '+254712345678',
            gender: 'Male',
            dob: '01-01-1990',
            status: 'active'
        },
        {
            name: 'John Doe',
            mobile: '+254712345678',
            gender: 'Male',
            dob: '01-01-1990',
            status: 'active'
        },
        {
            name: 'John Doe',
            mobile: '+254712345678',
            gender: 'Male',
            dob: '01-01-1990',
            status: 'active'
        },
        {
            name: 'John Doe',
            mobile: '+254712345678',
            gender: 'Male',
            dob: '01-01-1990',
            status: 'active'
        },
        {
            name: 'John Doe',
            mobile: '+254712345678',
            gender: 'Male',
            dob: '01-01-1990',
            status: 'active'
        },
        {
            name: 'John Doe',
            mobile: '+254712345678',
            gender: 'Male',
            dob: '01-01-1990',
            status: 'active'
        },
        {
            name: 'John Doe',
            mobile: '+254712345678',
            gender: 'Male',
            dob: '01-01-1990',
            status: 'active'
        },
        {
            name: 'John Doe',
            mobile: '+254712345678',
            gender: 'Male',
            dob: '01-01-1990',
            status: 'active'
        },
        {
            name: 'John Doe',
            mobile: '+254712345678',
            gender: 'Male',
            dob: '01-01-1990',
            status: 'active'
        },
        {
            name: 'John Doe',
            mobile: '+254712345678',
            gender: 'Male',
            dob: '01-01-1990',
            status: 'active'
        }
    ]
    const headers = [
        {
            key: 'name',
            header: 'Patient Name',
        },
        {
            key: 'mobile',
            header: 'Mobile Number',
        },
        {
            key: 'gender',
            header: 'Gender',
        },
        {
            key: 'dob',
            header: 'Date of Birth',
        },
        {
            key: 'status',
            header: 'Status',
        },
    ]
    return (
        <>
            <Head>
                <title>Dashboard 2</title>
                <meta name="description" content=""/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <TopNavigation/>
            <div className="mt-12 bg-white p-6">
                <div className="flex justify-between items-end pb-12">
                    <div className="">
                        <h1 className="mb-8 font-medium">Patients</h1>
                        <div className="w-2/3 text-sm text-accent-2 font-medium">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consectetur explicabo facilis id ipsa
                            laudantium magni molestiae molestias nemo neque nesciunt nulla odit quod reiciendis, repellendus
                            rerum velit veritatis voluptate! <a href="#" className="text-accent-3">Click here</a>
                        </div>
                    </div>
                    <Button kind="primary">
                        Add New Patient
                    </Button>
                </div>
                <DataTable rows={patients} headers={headers} isSortable>
                    {({rows, headers, getTableProps, getHeaderProps, getRowProps}) => (
                        <Table {...getTableProps()}>
                            <TableHead>
                                <TableRow>
                                    {headers.map((header) => (
                                        <TableHeader {...getHeaderProps({header})}>
                                            {header.header}
                                        </TableHeader>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow {...getRowProps({row})}>
                                        {row.cells.map((cell) => (
                                            <TableCell key={cell.id}>{cell.value}</TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </DataTable>
            </div>
        </>
    )
}
