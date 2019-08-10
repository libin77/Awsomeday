package com.amazonaws.lambda.demo;

import java.util.ArrayList;
import java.util.List;

import com.amazonaws.lambda.bean.ChartType;
import com.amazonaws.lambda.bean.VelocityChart;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.document.DynamoDB;
import com.amazonaws.services.dynamodbv2.document.Item;
import com.amazonaws.services.dynamodbv2.document.Table;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

public class LambdaFunctionHandler implements RequestHandler<ChartType, List<VelocityChart>> {
	
	//private DynamoDB dynamoDb;
   private String DYNAMODB_TABLE_NAME = "sprint";
   
   // private Regions REGION = Regions.US_EAST_1;
    
    @Override
    public List<VelocityChart> handleRequest(ChartType input, Context context) {
        //this.initDynamoDbClient();
    	AmazonDynamoDB client = AmazonDynamoDBClientBuilder.standard().build();
    	DynamoDB dynamoDB = new DynamoDB(client);
    	
        List<VelocityChart> velocityCharts = new ArrayList<VelocityChart>();
       
       /* TableKeysAndAttributes tableKeysAndAttributes = new TableKeysAndAttributes(DYNAMODB_TABLE_NAME);
        tableKeysAndAttributes.addHashOnlyPrimaryKeys("sprintName","MAT Sprint1","MAT Sprint2");
        
        BatchGetItemOutcome outcome = dynamoDb.batchGetItem(tableKeysAndAttributes);

       for (String tableName : outcome.getTableItems().keySet()) {
            List<Item> items = outcome.getTableItems().get(tableName);
        	VelocityChart velocityChart = new VelocityChart();
            for (Item item : items) {
            	velocityChart.setSprintName(item.get("sprintName").toString());
            	velocityChart.setAcceptedPoints(Integer.parseInt(item.get("acceptedPoints").toString()));
            	velocityChart.setCompletedPoints(Integer.parseInt(item.get("completedPoints").toString()));
            	velocityCharts.add(velocityChart);
            }
        }*/
        
        Table table = dynamoDB.getTable(DYNAMODB_TABLE_NAME);
        for(int i=1;i<5;i++) {
        	Item item = table.getItem("id",i);
        	//int committedPoints = Integer.parseInt(item.get("committedPoints").toString());
        	//int completedPoints = Integer.parseInt(item.get("completedPoints").toString());
            VelocityChart velocityChart = new VelocityChart();
            velocityChart.setSprintName(item.get("sprintName").toString());
            velocityChart.setAcceptedPoints(Integer.parseInt(item.get("acceptedPoints").toString()));
            velocityChart.setCompletedPoints(Integer.parseInt(item.get("completedPoints").toString()));
        	velocityCharts.add(velocityChart);
        }
        return velocityCharts;
    }
    
    /*private void initDynamoDbClient() {
        AmazonDynamoDBClient client = new AmazonDynamoDBClient();
        client.setRegion(Region.getRegion(REGION));
        this.dynamoDb = new DynamoDB(client);
    }*/

}
