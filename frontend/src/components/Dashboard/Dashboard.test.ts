import Dashboard from './Dashboard'

describe('Dashboard', () => {
  test('should render as expected', () => {
    const dashboardFunction = Dashboard()

    expect(dashboardFunction).toBeDefined()
  })
})
