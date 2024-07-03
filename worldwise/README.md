## React router
- Matching url with different UI views (component). It is client-side routing.
- Declarative approach using <BowserRouter><Routes><Route /></BowserRouter></Routes>

## css-modules:
- Create one external css file percomponent. module_name syntax: nameOfComponent.module.css
- Creating global class is usually done when className are provided by an external source so this is done by :global(.class_name){}


## for optimization

# for the city component's useEffect causing infinite loop 
issue is that the getcity fnx whenever is called, the citiesContext will be changed causing the renrenders in the consumer component, then again the city component will be rendered causing the useeffect to run again. so we need to stabalize the getCity by using the useCallback hook

