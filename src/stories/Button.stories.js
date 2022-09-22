import Button from '../components/Button'
import Icon from '../components/Icon'
 
export default{
    title: "Components/Button",
    component: Button,
    argTypes: {
        handleClick: {action: "hanldeClick"},
        iconName: { control: { type: "select", options: ["circle-right", "circle-down", "exit", "settings"] }
    },
}
}
const Template = args => <Button {...args} />

export const Small = Template.bind({})
Small.args={
    backgroundColor: "#4F72F0",
    label: "Press Me",
    size: "sm",
}
export const SmallPill = Template.bind({})
SmallPill.args={
    buttonColor: "#4F72F0",
    label: "Press Me",
    size: "sm",
    shape: 'pill',
}

export const SmallPillOutline = Template.bind({})
SmallPillOutline.args={
    buttonColor: "#4F72F0",
    label: "Press Me",
    size: "sm",
    shape: 'pill',
    outline: true
}

export const Medium = Template.bind({})
Medium.args={
    buttonColor: "#4F72F0",
    label: "Press Me",
    size: "md",
}

export const MediumPill = Template.bind({})
MediumPill.args={
    buttonColor: "#4F72F0",
    label: "Press Me",
    size: "md",
    shape: 'pill',
}

export const Large = Template.bind({})
Large.args={
    buttonColor: "#4F72F0",
    label: "Press Me",
    size: "lg",
}

export const LargeSetting = Template.bind({})
LargeSetting.args={
    buttonColor: "#4F72F0",
    label: "Press Me",
    size: "lg",
    iconName: 'equalizer'
}

export const LargePill = Template.bind({})
LargePill.args={
    buttonColor: "#4F72F0",
    label: "Press Me",
    size: "lg",
    shape: 'pill',
}

export const LongLabel = Template.bind({})
LongLabel.args={
    buttonColor: "Blue",
    label: "Press Me Press Me Press Me Press Me Press Me Press Me Press Me ",
    size: "lg",
}