import {
    TopNavigation,
    BreadcrumbsBar,
    Select,
    SelectItem,
    SelectItemGroup,
    FormGroup,
    Stack,
    ContentSwitcher,
    Switch,
    Button,
    DatePicker,
    DatePickerInput,
    TimePickerSelect,
    TimePicker,
    InlineNotification,
    TextInput,
    ArrowLeft,
    ArrowRight
} from "ui";
import Head from 'next/head';
import {useEffect, useState} from "react";
import dayjs from 'dayjs';
import { useFormik } from 'formik';

export default function Home() {
    const defaultBookings = [
        {
            "date": "2023-03-28",
            "booking": {
                "start": 0,
                "end": 3,
                "label": "Marketing Bi-Weekly Review",
                "user": "U03HACE0RGT"
            },
            room: 1
        },
        {
            "date": "2023-03-29",
            "booking": {
                "start": 0,
                "end": 3,
                "label": "Med Team Bi-Weekly Review",
                "user": "U03HACE0RGT"
            },
            room: 1
        },
        {
            "date": "2023-03-29",
            "booking": {
                "start": 0,
                "end": 3,
                "label": "Marketing Bi-Weekly Review",
                "user": "U03HACE0RGT"
            },
            room: 6
        },
        {
            "date": "2023-03-29",
            "booking": {
                "start": 8,
                "end": 9,
                "label": "Patient Portal Design Review",
                "user": "U03HACZ6XS6"
            },
            room: 1
        },
        {
            "date": "2023-03-29",
            "booking": {
                "start": 10,
                "end": 25,
                "label": "Nurse Orientation",
                "user": "U03HCPTHLQL"
            },
            room: 1
        },
        {
            "date": "2022-09-08",
            "booking": {
                "start": 31,
                "end": 34,
                "label": "Tech <> Med Meeting",
                "user": "U03HABCM7KM"
            },
            room: 1
        },
        {
            "date": "2023-03-28",
            "booking": {
                "start": 5,
                "end": 9,
                "label": "Engineering Bi-Weekly Review",
                "user": "U03HACE0RGT"
            },
            room: 2
        },
        {
            "date": "2023-03-29",
            "booking": {
                "start": 10,
                "end": 12,
                "label": "Patient Portal Design Review",
                "user": "U03HACZ6XS6"
            },
            room: 2
        },
        {
            "date": "2023-03-29",
            "booking": {
                "start": 10,
                "end": 25,
                "label": "Customer Support Orientation",
                "user": "U03HCPTHLQL"
            },
            room: 3
        },
        {
            "date": "2023-03-29",
            "booking": {
                "start": 1,
                "end": 4,
                "label": "Tech <> Med Meeting",
                "user": "U03HABCM7KM"
            },
            room: 2
        }
    ]
    const slots = [
        "09:00",
        "09:15",
        "09:30",
        "09:45",
        "10:00",
        "10:15",
        "10:30",
        "10:45",
        "11:00",
        "11:15",
        "11:30",
        "11:45",
        "12:00",
        "12:15",
        "12:30",
        "12:45",
        "13:00",
        "13:15",
        "13:30",
        "13:45",
        "14:00",
        "14:15",
        "14:30",
        "14:45",
        "15:00",
        "15:15",
        "15:30",
        "15:45",
        "16:00",
        "16:15",
        "16:30",
        "16:45",
        "17:00",
        "17:15",
        "17:30",
        "17:45",
        "18:00"
    ]
    const locations = [
        {
            name: 'Magharibi Place',
            id: 1,
            rooms: [
                {
                    name: 'Storm Room',
                    id: 1
                },
                {
                    name: 'Founders Room',
                    id: 2
                },
                {
                    name: 'Tech Room',
                    id: 3
                },
                {
                    name: 'BD Room',
                    id: 4
                },
                {
                    name: 'CS Room',
                    id: 5
                }
            ]
        },
        {
            name: 'Nelson Awori',
            id: 2,
            rooms: [
                {
                    name: 'Room 1',
                    id: 6
                },
                {
                    name: 'Room 2',
                    id: 7
                },
                {
                    name: 'Room 3',
                    id: 8
                }
            ]
        },
        {
            name: 'Fortis',
            id: 3,
            rooms: [
                {
                    name: 'Room 1',
                    id: 9
                },
                {
                    name: 'Room 2',
                    id: 10
                }
            ]
        }
    ]

    const [currentLocationBookings, setCurrentLocationBookings] = useState<any>([])
    const [currentRoomBookings, setCurrentRoomBookings] = useState<any>([])
    const [location, setLocation] = useState(locations[0])
    const [room, setRoom] = useState<any>()
    const [currentDate, setCurrentDate] = useState<any>(dayjs())
    const [toasts, setToasts] = useState<any>([])
    const [bookings, setBookings] = useState<any>([])

    useEffect(() => {
        const newBookings = bookings.filter((x: any) => {
            return location.rooms.map(y => y.id).includes(x.room) && x.date === dayjs(currentDate).format('YYYY-MM-DD')
        })
        setCurrentLocationBookings(newBookings)
        setRoom(location.rooms[0])
    }, [location, currentDate, bookings])

    useEffect(() => {
        const roomBookings = currentLocationBookings.filter((x: any) => {
            return x.room === room.id
        })
        setCurrentRoomBookings(roomBookings)
    }, [currentLocationBookings, room])

    const addToast = (type: string, title: string, subtitle: string) => {
        setToasts((prevState: any) => [...prevState, {
            type,
            title,
            subtitle
        }])
    }
    const renderBooking = (booking: any, index: number) => {
        const start = booking.booking.start.split(':')
        const topPadding = ((parseInt(start[0]) - 9) * 12) + (parseInt(start[1])/60 * 12)

        const end = booking.booking.end.split(':')
        const height = ( ( parseInt(end[0]) - (parseInt(start[0])) ) * 12) - (parseInt(start[1])/60 * 12) + (parseInt(end[1])/60 * 12)

        return (
            <div key={index.toString()} className="absolute" style={{top: topPadding + 'rem'}}>
                <div className="bg-white px-6 py-3 flex gap-x-20 cursor-pointer hover:drop-shadow-xl min-h-[2rem]" style={{height: height + 'rem'}}>
                    <p className="font-semibold text-lg">
                        <span>{booking.booking.label}</span>
                        <span className="mt-3 text-accent-2 font-normal ml-2 text-sm">- Booked by <strong>{ booking.booking.user }</strong></span>
                    </p>
                    <p className="text-accent-3">
                        {
                            dayjs('1/1/1 ' + booking.booking.start).format('hh:mm A') }
                        <span className="px-1.5">-</span>
                        { dayjs('1/1/1 ' + booking.booking.end).format('hh:mm A') }
                    </p>
                </div>
            </div>
        )
    }

    const formik = useFormik({
        initialValues: {
            title: '',
            room: '',
            start: '',
            startType: 'AM',
            end: '',
            endType: 'AM',
            date: dayjs(currentDate).format('MM/DD/YYYY'),
        },
        onSubmit: values => {
            const newBooking = {
                date: dayjs(values.date).format('YYYY-MM-DD'),
                booking: {
                    start: dayjs('1/1/1 ' + values.start + ' ' + values.startType).format('H:mm'),
                    end: dayjs('1/1/1 ' + values.end    + ' ' + values.endType).format('H:mm'),
                    label: values.title,
                    user: "Michael Scott"
                },
                room: parseInt(values.room)
            }
            setBookings([
                ...bookings,
                newBooking
            ])
            addToast('success', '', 'Room booked successfully!')
        },
    });

    return (
        <>
            <Head>
                <title>Meeting Rooms</title>
                <meta name="description" content=""/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <TopNavigation/>
            <div className="mt-12 h-12">
                <BreadcrumbsBar>
                    <DatePicker
                        datePickerType="single"
                        onChange={(value: any) => {
                            setCurrentDate(dayjs(value[0]).format('MM/DD/YYYY'))
                        }}
                        value={dayjs(currentDate).format('MM/DD/YYYY')}
                        className="w-full"
                    >
                        <DatePickerInput
                            id="date-picker-single"
                            labelText="Pick a date"
                            hideLabel={true}
                            placeholder="mm/dd/yyyy"
                            className="w-full"
                        />
                    </DatePicker>
                    <Select
                        id="select-location"
                        labelText="Select a location"
                        hideLabel={true}
                        inline={true}
                        placeholder="Select location"
                        onChange={(e: any) => {
                            setLocation(locations[e.target.value])
                        }}
                    >
                        {
                            locations.map((x, index) => {
                                return (
                                    <SelectItem
                                        key={index.toString()}
                                        text={x.name}
                                        value={index}
                                    />
                                )
                            })
                        }
                    </Select>
                </BreadcrumbsBar>
            </div>
            <div className="grid grid-cols-7 relative">
                <div className="absolute inset-x-0 bottom-0 p-6 z-20">
                    <div className="flex flex-col gap-4 py-6">
                        {
                            toasts.map((toast: any, index: number) => {
                                return (
                                    <div  key={index.toString()} className="ml-auto ">
                                        <InlineNotification
                                            actionButtonLabel="Close"
                                            aria-label="closes notification"
                                            statusIconDescription="notification"
                                            subtitle={toast.subtitle}
                                            title={toast.title}
                                            kind={toast.type}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="col-span-2 -mt-24 px-6 pt-24 relative bg-white h-screen">
                    <div className="absolute w-[1px] h-full right-0 inset-y-0 bg-accent-1"></div>
                    <div className="pt-6 h-full flex flex-col">
                        <h1 className="text-3xl mb-2 font-bold">Book a room</h1>
                        <form onSubmit={formik.handleSubmit}>
                            <FormGroup
                                legendId="form-group-1"
                                legendText=""
                                className="w-full"
                            >
                                <Stack gap={7} className="w-full">
                                    <TextInput
                                        className="input-test-class"
                                        id="text-input-1"
                                        invalidText="Error message goes here"
                                        labelText="Create a title for your meeting"
                                        size="md"
                                        type="text"
                                        name="title"
                                        onChange={formik.handleChange}
                                        value={formik.values.title}
                                    />

                                    <Select
                                        helperText="Rooms are grouped by location"
                                        id="select-1"
                                        labelText="Pick a meeting room"
                                        size="md"
                                        className="w-full"
                                        name="room"
                                        onChange={formik.handleChange}
                                        value={formik.values.room}
                                    >
                                        <SelectItem
                                            disabled
                                            hidden
                                            value=""
                                        />
                                        {
                                            locations.map((location, index) => {
                                                return (
                                                    <SelectItemGroup label={location.name} key={index}>
                                                        {
                                                            location.rooms.map((room, index2) => {
                                                                return (
                                                                    <SelectItem
                                                                        key={index2}
                                                                        text={room.name}
                                                                        value={room.id}
                                                                    />
                                                                )
                                                            })
                                                        }
                                                    </SelectItemGroup>
                                                )
                                            })
                                        }
                                    </Select>

                                    <DatePicker
                                        datePickerType="single"
                                        name="date"
                                        onChange={formik.handleChange}
                                        value={formik.values.date}
                                    >
                                        <DatePickerInput
                                            id="date-picker-single"
                                            labelText="Pick a date"
                                            placeholder="mm/dd/yyyy"
                                        />
                                    </DatePicker>

                                    <div className="flex gap-x-2">
                                        <TimePicker
                                            id="start-time"
                                            labelText="Start time"
                                            name="start"
                                            onChange={formik.handleChange}
                                            value={formik.values.start}
                                        >
                                            <TimePickerSelect
                                                id="time-picker-select-1"
                                                name="startType"
                                                onChange={formik.handleChange}
                                                value={formik.values.startType}
                                            >
                                                <SelectItem value="AM" text="AM"/>
                                                <SelectItem value="PM" text="PM"/>
                                            </TimePickerSelect>
                                        </TimePicker>
                                        <TimePicker
                                            id="end-time"
                                            labelText="End time"
                                            name="end"
                                            onChange={formik.handleChange}
                                            value={formik.values.end}
                                        >
                                            <TimePickerSelect
                                                id="time-picker-select-1"
                                                name="startType"
                                                onChange={formik.handleChange}
                                                value={formik.values.endType}
                                            >
                                                <SelectItem value="AM" text="AM"/>
                                                <SelectItem value="PM" text="PM"/>
                                            </TimePickerSelect>
                                        </TimePicker>
                                    </div>

                                    <Button type="submit">
                                        Book slot
                                    </Button>
                                </Stack>
                            </FormGroup>
                        </form>
                    </div>
                </div>
                <div className="col-span-5 h-full relative">
                    <div className="absolute inset-x-0 top-0 flex flex-col bg-white z-10">
                        <div className="p-6 flex flex-row justify-between">
                            <h1 className="text-4xl font-bold">{dayjs(currentDate).format('dddd, DD MMMM YYYY.')}</h1>
                            <div className="flex gap-x-2">
                                <Button kind="tertiary" size="sm">Today</Button>
                                <Button renderIcon={ArrowLeft} kind="tertiary" iconDescription="Left" size="sm" />
                                <Button renderIcon={ArrowRight} kind="tertiary" iconDescription="Right" size="sm"/>
                            </div>
                        </div>
                        <ContentSwitcher className="px-6 mb-6" selectedIndex={0}>
                            {
                                location.rooms.map((x, index) => {
                                    return (
                                        <Switch
                                            key={x.id}
                                            name={x.name}
                                            text={x.name}
                                            onClick={() => setRoom(location.rooms[index])}
                                        />
                                    )
                                })
                            }
                        </ContentSwitcher>
                        <div className="h-[1px] w-full bg-accent-1"></div>
                    </div>
                    <div className="-mt-24 pt-64 h-screen overflow-y-scroll">
                        <div className="py-12 px-6 flex flex-col relative">
                            {
                                slots.map((slot, index) => {
                                    return (
                                        <div
                                            key={index.toString()}
                                            className={`flex flex-row items-start h-[3rem] ` + (index % 4 !== 0 ? 'opacity-40 text-sm' : '')}>
                                            <span className="font-medium px-2 text-primary w-1/12">{ slot }</span>
                                            <div className="h-[2px] bg-primary opacity-10 flex-1 mx-8"/>
                                        </div>
                                    )
                                })
                            }
                            <div className="absolute inset-0 h-full w-full py-12 px-6">
                                <div className="w-11/12 ml-auto flex flex-col px-8 relative h-full">
                                    {
                                        currentRoomBookings.map((x: any, index: number) => {
                                            return renderBooking(x, index)
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
