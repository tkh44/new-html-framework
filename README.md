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
jsx

```javascript
return (<div>
  <h1>{foo}</h1>
</div>);
```
