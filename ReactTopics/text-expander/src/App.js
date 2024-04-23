import TextExpander from "./textExpander"

export default function App(){
  return(
    <div>

      <TextExpander buttonColor='blue' expandButtonText='expand' collapseButtonText='collapse'> jnckjnd dcid iv vv akjcnkjcn acjdcdkjnd jnckjnd dcid iv vv akjcnkjcn acjdcdkjnd jnckjnd dcid iv vv akjcnkjcn acjdcdkjnd jnckjnd dcid iv vv akjcnkjcn acjdcdkjnd jnckjnd dcid iv vv akjcnkjcn acjdcdkjnd jnckjnd dcid iv vv akjcnkjcn acjdcdkjnd </TextExpander>

      <TextExpander buttonColor='blue' expandButtonContent='expand' collapseNumWords={10} collapseButtonText='collapse' expandButtonText= 'show more'> jnckjnd dcid iv vv akjcnkjcn acjdcdkjnd jnckjnd dcid iv vv akjcnkjcn acjdcdkjnd jnckjnd dcid iv vv akjcnkjcn acjdcdkjnd jnckjnd dcid iv vv akjcnkjcn acjdcdkjnd jnckjnd dcid iv vv akjcnkjcn acjdcdkjnd jnckjnd dcid iv vv akjcnkjcn acjdcdkjnd </TextExpander>

      <TextExpander buttonColor='red' expanded={true} className='container' collapseNumWords={5} > jnckjnd dcid iv vv akjcnkjcn acjdcdkjnd jnckjnd dcid iv vv akjcnkjcn acjdcdkjnd jnckjnd dcid iv vv akjcnkjcn acjdcdkjnd jnckjnd dcid iv vv akjcnkjcn acjdcdkjnd jnckjnd dcid iv vv akjcnkjcn acjdcdkjnd jnckjnd dcid iv vv akjcnkjcn acjdcdkjnd </TextExpander>
    </div>
  )
}

