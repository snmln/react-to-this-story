import Alerts from '../components/Alerts'
 
export default{
    title: "Components/Alerts",
    component: Alerts,
}
const Template = args => <Alerts {...args} />

export const Hazard = Template.bind({})
Hazard.args={
    color: "#E77C40",
    label: "Warning about this alert",
    iconName: 'warning',
}

export const Stop = Template.bind({})
Stop.args={
    color: "#DF1E1E",
    label: "this is a stop alert",
    iconName: 'blocked'
}

export const confirmation = Template.bind({})
confirmation.args={
    color: "#76D8A3",
    label: "This is a confirmation alert",
    iconName: 'checkmark2'
}


export const Bell = Template.bind({})
Bell.args={
    color: "#23A6F0",
    label: "Warning about this alert",
    iconName: 'bell'
}