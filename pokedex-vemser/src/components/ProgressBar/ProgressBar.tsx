import { Bar, Progress } from "./ProgressBar.styles";


function ProgressBar(props: any) {
    const abilities = props.abilities;
    const color = props.color

  return (
    <Progress >
        <Bar width={`${abilities}px`} color={color}>

        </Bar>
    </Progress>
  )
}
export default ProgressBar