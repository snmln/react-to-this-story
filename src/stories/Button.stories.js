import Button from '../components/Button'

export default{
    title: "Components/Button",
    component: Button,
    argTypes: {handleClick: {action: "hanldeClick"}},
}
const Template = args => <Button {...args} />

export const Red = Template.bind({})
Red.args={
    backgroundColor: "red",
    label: "Press Me",
    size: "md",
}

export const Small = Template.bind({})
Small.args={
    backgroundColor: "red",
    label: "Press Me",
    size: "sm",
}

export const Large = Template.bind({})
Large.args={
    backgroundColor: "red",
    label: "Press Me",
    size: "lg",
}

export const LongLabel = Template.bind({})
LongLabel.args={
    backgroundColor: "red",
    label: "Press Me Press Me Press Me Press Me Press Me Press Me Press Me ",
    size: "lg",
}