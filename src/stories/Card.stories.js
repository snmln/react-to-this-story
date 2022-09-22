import Card from '../components/Card'

export default{
    title: "Components/Card",
    component: Card,
    argTypes: {
    handleClick: {action: "hanldeClick"},
    IconName: { control: { type: "select", options: ["circle-right", "circle-down", "exit", "hour-glass", "home"] }},
    Orientation: { control: { type: "select", options: ["vertical", "horizantal"] }}
    }
}
const Template = args => <Card {...args} />

export const horizantal = Template.bind({})
horizantal.args={
 label: 'Card label header',
 IconBackgroundColor: "#4F72F0",
 IconName: 'home',
 Orientation: "horizantal"
}

export const Vertical = Template.bind({})
Vertical.args={
 label: 'Card label header',
 IconBackgroundColor: "#4F72F0",
 IconName: 'home',
 Orientation: "vertical"
}
