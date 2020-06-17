# Patch file content

Github Action to replace file content using regular expressions.

## Inputs

### `filename`

**Required** File to work with

### `pattern`

**Required** Pattern to replace

### `replace`

**Required** The value to replace with

## Example usage

```yaml
- uses: MerthinTechnologies/patch-file-content-action@v1
  with:
    filename: './src/tool.csproj'
    pattern: '<version>(.*)</version>'
    replace: '<version>${{ env.VERSION }}</version>'
```
