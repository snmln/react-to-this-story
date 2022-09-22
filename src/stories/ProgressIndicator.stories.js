import ProgressIndicator from '../components/ProgressIndicator'

export default{
    title: "Components/ProgressIndicator",
    component: ProgressIndicator,
    argTypes: {
        numberOfChildren: { type: "number", defaultValue: 4},
        // StepColor:{ type: "string", defaultValue:'#4F72F0'}
    }
}
const Template = ({numberOfChildren, ...args}) => (
<ProgressIndicator {...args} >
    {[...Array(numberOfChildren).keys()].map(n => (<div style={{
        width: "50px", 
        height: "50px", 
        backgroundColor: '#4F72F0', 
        display: "flex", 
        borderRadius: '50%',
        justifyContent: "center", 
        alignItems: "center"}}>

    </div>
    ))}
</ProgressIndicator>
)

export const Horizantal = Template.bind({})

Horizantal.args = {
    direction: "row",
    // spacing: 2, 
    wrap: false,
    StepColor: '#4F72F0'
}


