**In**

```javascript
return html`
  <div>
    <h1>${foo}</h1>
  </div>
`;

```

`↓ ↓ ↓ ↓ ↓ ↓`

**Out**

```javascript
return (<div>
  <h1>{foo}</h1>
</div>);
```
