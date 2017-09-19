**In**

tagged template literal

```javascript
return html`
  <div>
    <h1>${foo}</h1>
  </div>
`;

```

`↓ ↓ ↓ ↓ ↓ ↓`

**Out**

JSX

```javascript
return (<div>
  <h1>{foo}</h1>
</div>);
```
