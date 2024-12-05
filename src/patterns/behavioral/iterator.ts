import { IPatternReporter } from "../../main";

export function setupIterator(reporter: IPatternReporter) {
  reporter.patternName = 'Iterator'
  reporter.patternType = 'Behavior'
  reporter.addGoal('TODO iterator')
  reporter.addPros('TODO iterator')
  reporter.addCons('TODO iterator')

  run(reporter)
}

function run(reporter: IPatternReporter) {
  console.log('iterator: run');
}

