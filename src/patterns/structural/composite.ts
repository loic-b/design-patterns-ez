import { IPatternReporter } from "../../main";

export function setupComposite(reporter: IPatternReporter) {
  reporter.patternName = 'Composite'
  reporter.patternType = 'Structural'
  reporter.addGoal('TODO composite')
  reporter.addPros('TODO composite')
  reporter.addCons('TODO composite')

  run(reporter)
}

function run(reporter: IPatternReporter) {
  console.log('composite: run');
}

