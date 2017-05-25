
export function isError(result) {
  if (result.code !== 'YYXX/REQUIRE_SUCCESS') {
    alert(result.msg)
    return true
  }
}
